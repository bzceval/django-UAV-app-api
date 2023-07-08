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
    queryset = Uav.objects.filter(availability=True)
    serializer_class = UavSerializer
    permission_classes = [IsStaffOrReadOnly]

    def get_queryset(self):
        if self.request.user.is_staff:
            queryset = Uav.objects.all() # If user.is_staff show all data.
        else:
            queryset = super().get_queryset() # Show default data.

        return queryset

# ---------------------------------
# ReservationView
# --------------------------------- 
class ReservationView(FixView): 
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer