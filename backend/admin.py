from django.contrib import admin
from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['order', 'title', 'is_live', 'is_featured', 'created_at']
    list_editable = ['order', 'is_live', 'is_featured']
    list_display_links = ['title']
    ordering = ['order']
    search_fields = ['title', 'description']