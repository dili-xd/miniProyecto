from django.urls import path
from .views import ProductoView,CrearUsuario,ValidarUsuarioView

urlpatterns = [
    path('productos/',ProductoView.as_view()),
    path('crear_usuario/',CrearUsuario.as_view()),
    path('validar_usuario/',ValidarUsuarioView.as_view())
]