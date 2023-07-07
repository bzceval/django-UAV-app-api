from rest_framework.viewsets import ModelViewSet

from .serializers import (
    Uav, UavSerializer,
    Reservation, ReservationSerializer,
)

# ---------------------------------
# FixView
# ---------------------------------
class FixView(ModelViewSet):
    pass