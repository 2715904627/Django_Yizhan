# Generated by Django 4.1.7 on 2023-03-17 01:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('yizhan', '0002_user'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={'verbose_name': 'User'},
        ),
        migrations.AlterModelOptions(
            name='yizhan',
            options={'verbose_name': 'Yizhan'},
        ),
        migrations.AlterModelTable(
            name='user',
            table='User',
        ),
        migrations.AlterModelTable(
            name='yizhan',
            table='Yizhan',
        ),
    ]
