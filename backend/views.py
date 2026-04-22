from django.shortcuts import render
from .serializers import ProjectSerializer
from . models import Project
from rest_framework import viewsets

class ProjectViewset(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
