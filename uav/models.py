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

# ---------------------------------
# UAV
# ---------------------------------
from django.core.validators import MinValueValidator

class Uav(FixModel): 
    serial_number = models.CharField(max_length=16, unique=True)
    brand = models.CharField(max_length=16)
    model = models.CharField(max_length=16)
    year = models.PositiveSmallIntegerField() 
    rent_per_day = models.DecimalField(
        max_digits = 8,
        decimal_places = 2,
        validators = [MinValueValidator(1)]
    )
    availability = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.brand} {self.model} # {self.serial_number}'