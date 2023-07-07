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

class UavView(FixView):
    queryset = Uav.objects.filter()
    serializer_class = UavSerializer

# ---------------------------------
# ReservationView
# --------------------------------- 
class ReservationView(FixView): 
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer