from django.db import models
from django.contrib.auth.models import User 

class Usuario (models.Model):
   user=models.OneToOneField(User,on_delete=models.CASCADE)



class Productos(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=255)
    precio = models.IntegerField()
    cantidad_disponible = models.IntegerField()