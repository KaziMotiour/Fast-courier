from rest_framework import serializers
from .models import Notification
from django.contrib.auth.models import User


class NotifiactionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notification
        fields = ['order', 'marchent', 'date', 'is_seen']


