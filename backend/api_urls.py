from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ProjectViewset

router = DefaultRouter()
router.register(r'projects',ProjectViewset, basename='project')

urlpatterns = [
    path('',include(router.urls))
]