from django.shortcuts import render
from .models import Marchant, PlaceNewOrder
from .serializers import MarchentSerializer, PlaceOrderSerializer, PlaceOrderListSerializer, UserSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView,RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from django.contrib.auth.models import User
# Create your views here.

class UserProfile(ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        pk = self.request.user.id
        queryset = User.objects.filter(pk=pk)
        return queryset


class MerchantListAPIView(ListAPIView):
    serializer_class = MarchentSerializer
    permission_classes = [IsAdminUser]
    queryset = Marchant.objects.all()


class OrderForMarchent(ListAPIView):
    serializer_class=PlaceOrderListSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        user = self.request.user
        marchent = Marchant.objects.get(user=user)
        queryset = PlaceNewOrder.objects.filter(marchant=marchent)
        return queryset

class PlacedOrder(CreateAPIView):
    serializer_class = PlaceOrderSerializer
    permission_classes = [IsAdminUser]
    queryset = PlaceNewOrder.objects.all()

class PlacedOrderList(ListAPIView):
    serializer_class = PlaceOrderListSerializer
    permission_classes = [IsAdminUser]
    queryset = PlaceNewOrder.objects.all()
 