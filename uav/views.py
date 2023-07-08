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


# ---------------------------------
# UavView
# --------------------------------- 
from .permissions import IsStaffOrReadOnly
class UavView(FixView):
    queryset = Uav.objects.filter()
    serializer_class = UavSerializer
    permission_classes = [IsStaffOrReadOnly]

# ---------------------------------
# ReservationView
# --------------------------------- 
class ReservationView(FixView): 
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer