from django.db import models
import uuid
from django.contrib.auth.models import User
from django.contrib.humanize.templatetags import humanize
from django.db.models.signals import post_save,  post_delete, m2m_changed
from django.dispatch import receiver
from notification.models import Notification

# Create your models here.
class Marchant(models.Model):
    user = models.OneToOneField(User, related_name="marchant", on_delete=models.CASCADE)
    first_name = models.CharField( max_length=150)
    last_name = models.CharField( max_length=150)
    create_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.first_name


class PlaceNewOrder(models.Model):
    
    percel_product_type = [
    ('Fragile', 'Fragile'),
    ('Liquid', 'Liquid'),
    ]

    marchant = models.ForeignKey(Marchant, related_name="addMarchent", on_delete=models.CASCADE)
    
    percel_name = models.CharField(max_length=250)
    percel_type = models.CharField(max_length=100, choices=percel_product_type,default='Fragile', null=False, blank=False )
    newInvoiceID = models.UUIDField(unique=True, default=uuid.uuid4, null=True, blank=True)

    weight = models.CharField(max_length=10)
    weight_unit  = models.CharField(max_length=10)
    cost = models.CharField(max_length=6, null=True, blank=True)
    cod_charge = models.CharField(max_length=6, null=True, blank=True) 
    return_charge = models.CharField(max_length=6, null=True, blank=True)
    total_cost = models.CharField(max_length=6)
    return_cost = models.CharField(max_length=6)
    Location = models.CharField(max_length=500)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return self.percel_type
    


    

@receiver([post_save, post_delete], sender=PlaceNewOrder)
def commentNotifction(sender, instance, created=None, **kwargs):
    print(instance.id,  'instalce ')
    if created:
        order = instance
        marchent = instance.marchant.user
    
        notify = Notification(order=order, marchent=marchent)
        notify.save()

    