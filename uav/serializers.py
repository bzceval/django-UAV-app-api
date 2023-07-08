from rest_framework import serializers

from .models import (
    Uav,
    Reservation
)


# ---------------------------------
# FixSerializer
# ---------------------------------
class FixSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()
    user_id = serializers.IntegerField(required=False, read_only=True)

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