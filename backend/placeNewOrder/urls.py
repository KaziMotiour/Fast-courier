
from django.urls import path
from .views import UserProfile, OrderForMarchent, PlacedOrder, PlacedOrderList, MerchantListAPIView

urlpatterns = [
    path('userProfile/', UserProfile.as_view(), name='merchant'),
    path('merchentlist/', MerchantListAPIView.as_view(), name='merchentlist'),
    path('merchantOrders/', OrderForMarchent.as_view(), name='orderForMarchent'),
    path('createOrder/', PlacedOrder.as_view(), name='PlacedOrder'),
    path('orderList/', PlacedOrderList.as_view(), name='PlacedOrderList'),
]
