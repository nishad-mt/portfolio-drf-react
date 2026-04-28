from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Project
from .serializers import ProjectSerializer
from django.core.mail import send_mail
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import AllowAny
from django.conf import settings
from rest_framework.response import Response
from django.core.validators import validate_email
from django.core.exceptions import ValidationError



class ProjectViewset(viewsets.ReadOnlyModelViewSet):
    """
    GET /api/projects/       → list all featured projects
    GET /api/projects/{id}/  → single project detail
    """
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Project.objects.filter(is_featured=True)
    
@api_view(['POST'])
@permission_classes([AllowAny])
def contact_message(request):
    name = request.data.get('name', '').strip()
    email = request.data.get('email', '').strip()
    message = request.data.get('message', '').strip()

    if not name or not email or not message:
        return Response({'error': 'All fields are required'}, status=400)

    try:
        validate_email(email)
    except ValidationError:
        return Response({'error': 'Invalid email'}, status=400)

    try:
        send_mail(
            subject=f'Portfolio contact from {name}',
            message=f'From: {name}\nEmail: {email}\n\n{message}',
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.CONTACT_RECEIVER_EMAIL],
        )
    except Exception as e:
        return Response({'error': 'Email failed to send'}, status=500)

    return Response({'success': True})