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

# ---------------------------------
# UavSerializer
# ---------------------------------
class UavSerializer(FixSerializer):

    class Meta:
        model = Uav
        exclude = []

# ---------------------------------
# ReservationSerializer
# ---------------------------------
class ReservationSerializer(FixSerializer): 

    class Meta:
        model = Reservation
        exclude = []      