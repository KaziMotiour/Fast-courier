# Generated by Django 3.2 on 2021-04-24 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('placeNewOrder', '0007_placeneworder_location'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='placeneworder',
            options={'ordering': ['-timestamp']},
        ),
        migrations.AddField(
            model_name='placeneworder',
            name='return_cost',
            field=models.CharField(default=' ', max_length=6),
            preserve_default=False,
        ),
    ]
