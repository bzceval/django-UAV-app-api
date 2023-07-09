from rest_framework.viewsets import ModelViewSet
from django.db.models import Q

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
    filterset_fields = ['brand', 'model', 'id'] # filter by id, brand and model

    def get_queryset(self):
        if self.request.user.is_staff:
            queryset = Uav.objects.all() # If user.is_staff show all data.
        else:
            queryset = super().get_queryset() # Show default data.

        # Filter by date:
        # https://localhost/api/uav/?from=2023-01-20&to=2023-01-25
        start = self.request.query_params.get('from', None)
        end = self.request.query_params.get('to', None)

        if start and end: 
            # To use AND and OR we can use the Q parameter:
            # https://docs.djangoproject.com/en/4.2/topics/db/queries/#complex-lookups-with-q-objects
            not_available_car_ids = Reservation.objects.filter(
                Q(start_date__gte = start, start_date__lte = end) | Q(end_date__gte = start, end_date__lte = end)
            ).values_list('car_id', flat=True)

            queryset = queryset.exclude(id__in=not_available_car_ids)

        return queryset

# ---------------------------------
# ReservationView
# --------------------------------- 
from .permissions import IsStaffOrOnlyOwnerObjects
class ReservationView(FixView): 
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = [IsStaffOrOnlyOwnerObjects]

    def get_queryset(self):
        if self.request.user.is_staff:
            return super().get_queryset() # If user.is_staff then show default data. 
        else:
            return Reservation.objects.filter(user=self.request.user) # Only the user can see her/his private objects.