# Generated by Django 3.2 on 2021-04-24 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('placeNewOrder', '0008_auto_20210424_1933'),
    ]

    operations = [
        migrations.AddField(
            model_name='placeneworder',
            name='weight_unit',
            field=models.CharField(default=' ', max_length=10),
            preserve_default=False,
        ),
    ]