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

    def create(self, validated_data):
        validated_data['user_id'] = self.context['request'].user.id
        return super().create(validated_data)

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
    uav = serializers.StringRelatedField()
    uav_id = serializers.IntegerField()

    class Meta:
        model = Reservation
        exclude = []      