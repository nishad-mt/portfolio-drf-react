from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import ProjectViewset,contact_message

router = DefaultRouter()
router.register(r'projects',ProjectViewset, basename='project')

urlpatterns = [
    path('',include(router.urls)),
    path('contact/', contact_message, name='contact'),

]