# Generated by Django 4.2.3 on 2023-07-08 01:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uav', '0001_initial'),
    ]

    operations = [
        migrations.AddConstraint(
            model_name='reservation',
            constraint=models.UniqueConstraint(fields=('user', 'start_date', 'end_date'), name='user_rent_date'),
        ),
    ]
