# Generated by Django 3.2.19 on 2023-07-20 07:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_product_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='image',
        ),
    ]
