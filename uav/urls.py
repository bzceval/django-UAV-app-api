from django.urls import path, include

# after '/api/' ->
urlpatterns = [] 

# -------------------------------
# Routers
# -------------------------------
from rest_framework.routers import DefaultRouter
from .views import UavView, ReservationView
router = DefaultRouter()
router.register('uav', UavView)
router.register('reservation', ReservationView)
urlpatterns += router.urls