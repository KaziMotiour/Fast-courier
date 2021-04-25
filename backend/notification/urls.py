from django.urls import path, include
from .views import countNotification

urlpatterns = [
    path('count/', countNotification.as_view(), name='notifiation')
]