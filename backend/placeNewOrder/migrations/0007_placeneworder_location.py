# Generated by Django 3.2 on 2021-04-24 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('placeNewOrder', '0006_alter_placeneworder_marchant'),
    ]

    operations = [
        migrations.AddField(
            model_name='placeneworder',
            name='Location',
            field=models.CharField(default=' ', max_length=500),
            preserve_default=False,
        ),
    ]
