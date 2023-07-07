from django.shortcuts import render
from .serializers import (User, UserSerializer)
from rest_framework.viewsets import ModelViewSet

# --------------------------------------------------------
# # UserCreateView -> Only CreateUser for permissions.AllowAny
# --------------------------------------------------------
from rest_framework.mixins import CreateModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import AllowAny

class UserView(ModelViewSet):
    queryset = User.objects.filter(is_staff=False)
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# -------------------------------
# UserView
# -------------------------------
from rest_framework.viewsets import ModelViewSet 

class UserView(ModelViewSet):
    queryset = User.objects.filter(is_superuser=False)
    serializer_class = UserSerializer    