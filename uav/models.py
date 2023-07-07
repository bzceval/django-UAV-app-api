from django.db import models

# ---------------------------------
# FixModel
# ---------------------------------
from django.contrib.auth.models import User

class FixModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta: 
        abstract = True