from django.shortcuts import render
from .models import Productos
from .serializers import ProductoSerializer
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response 
from django.contrib.auth.models import User 
from rest_framework.views import APIView
# Create your views here.
class CrearUsuario(APIView):
    def post(self,request):
        username=request.data.get('username')
        password= request.data.get ('password')     
        if User.objects.filter(username=username).exists():
            return Response ({'error':'El usuario ya existe'},status=400)
        
        user = User.objects.create_user(username=username,password=password) 
        
        return Response ({'mensaje':'usuario creado correctamente'},status=201)
    

class ValidarUsuarioView(APIView):
    def post (self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        if not username or not password:
            return Response ({'error':'FALTAN DATOS'},status=400)
        
        try: 
            user= User.objects.get(username=username)
        except User.DoesNotExist:
            return Response ({'error':'USUARIO NO ENCONTRADO'}, status=404)
        if not user.check_password(password):

             return Response ({'error':'USUARIO INVALIDO'},status=400)


class ProductoView(ListCreateAPIView):
    queryset = Productos.objects.all()
    serializer_class = ProductoSerializer