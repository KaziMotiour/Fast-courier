from django.db import models
from django.contrib.humanize.templatetags import humanize
from django.contrib.auth.models import  User
from django.db.models.signals import post_save,  post_delete, pre_delete


# Create your models here.
class Notification(models.Model):
    

    order  = models.ForeignKey('placeNewOrder.PlaceNewOrder', on_delete=models.CASCADE,  related_name='orderNotification', blank=True, null=True)    
    marchent =models.ForeignKey(User, on_delete=models.CASCADE,  related_name='notif_to_marchent')
    date = models.DateTimeField(auto_now_add=True)
    is_seen = models.BooleanField(default=False)
    
    def get_date(self):
        return humanize.naturaltime(self.date)






