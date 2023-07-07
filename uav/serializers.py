from rest_framework import serializers

from .models import (
    Uav,
    Reservation
)


# ---------------------------------
# FixSerializer
# ---------------------------------
class FixSerializer(serializers.ModelSerializer):
    pass