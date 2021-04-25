from rest_framework import serializers
from .models import Marchant, PlaceNewOrder
from django.contrib.auth.models import User




class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'is_superuser', 'marchant']


class MarchentSerializer(serializers.ModelSerializer):
    user=UserSerializer()
    class Meta:
        model = Marchant
        fields = ['id', 'user', 'first_name', 'last_name']




class PlaceOrderSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = PlaceNewOrder
        fields = ['marchant',  'percel_name', 'percel_type', 'newInvoiceID', 'weight', 'weight_unit', 'cost', 'cod_charge', 'return_charge', 'total_cost', 'Location', 'return_cost', 'timestamp']

   

class PlaceOrderListSerializer(serializers.ModelSerializer):
    
    marchant = MarchentSerializer()
    class Meta:
        model = PlaceNewOrder
        fields = ['marchant',  'percel_name', 'percel_type', 'newInvoiceID', 'weight', 'weight_unit', 'cost', 'cod_charge', 'return_charge', 'total_cost', 'return_cost', 'Location', 'timestamp']
