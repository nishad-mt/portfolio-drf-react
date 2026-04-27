from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tech_stack = models.JSONField(default=list, help_text="List of tech tags e.g. ['Python','Django','React']")
    github_link = models.URLField()
    live_link = models.URLField(blank=True, null=True)
    is_live = models.BooleanField(default=False, help_text="Shows the green Live badge on the card")
    is_featured = models.BooleanField(default=True, help_text="Show this project in the portfolio")
    order = models.PositiveIntegerField(default=0, help_text="Lower number = shown first")
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title