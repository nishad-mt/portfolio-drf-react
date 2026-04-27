from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Project
from .serializers import ProjectSerializer


class ProjectViewset(viewsets.ReadOnlyModelViewSet):
    """
    GET /api/projects/       → list all featured projects
    GET /api/projects/{id}/  → single project detail
    """
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Project.objects.filter(is_featured=True)