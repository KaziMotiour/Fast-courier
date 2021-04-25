# Generated by Django 3.2 on 2021-04-24 06:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('placeNewOrder', '0004_alter_placeneworder_marchant'),
    ]

    operations = [
        migrations.AlterField(
            model_name='placeneworder',
            name='marchant',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='addMarchent', to=settings.AUTH_USER_MODEL),
        ),
    ]
