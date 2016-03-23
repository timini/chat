from django.db import models
from django.contrib.auth.models import User


class DateMixin(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Comment(DateMixin):
    text = models.CharField(max_length=255)
    user = models.ForeignKey(User)

    class JSONAPIMeta:
        resource_name = "comments"
