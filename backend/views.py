from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Project
from .serializers import ProjectSerializer
from django.core.mail import send_mail
from rest_framework.decorators import api_view
from django.conf import settings
from rest_framework.response import Response


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
def contact_message(request):
    name = request.data.get('name', '')
    email = request.data.get('email', '')
    message = request.data.get('message', '')

    if not all([name, email, message]):
        return Response({'error': 'All fields are required'}, status=400)

    send_mail(
        subject=f'Portfolio contact from {name}',
        message=f'From: {name}\nEmail: {email}\n\n{message}',
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[settings.CONTACT_RECEIVER_EMAIL],
    )
    return Response({'success': True})