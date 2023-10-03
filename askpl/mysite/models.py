from django.db import models

class UUIDEntry(models.Model):
    uuid = models.CharField(max_length=36, unique=True)
    name = models.CharField(max_length=50, default='')
    surname = models.CharField(max_length=50, default='')
    group = models.CharField(max_length=20, default='')