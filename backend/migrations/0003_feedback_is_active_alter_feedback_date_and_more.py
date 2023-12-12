# Generated by Django 4.2.4 on 2023-11-22 08:38

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_feedback'),
    ]

    operations = [
        migrations.AddField(
            model_name='feedback',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='date',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='time',
            field=models.TimeField(blank=True, default=django.utils.timezone.now),
        ),
    ]
