from django.urls import path
from .views import ProductoView,CrearUsuario,ValidarUsuarioView,ProductoEliminarView,ProductoEditarView

urlpatterns = [
    path('productos/',ProductoView.as_view()),
    path('crear_usuario/',CrearUsuario.as_view()),
    path('validar_usuario/',ValidarUsuarioView.as_view()),
    path('producto_eliminar/<int:id>/',ProductoEliminarView.as_view()),
    path('producto_editar/<int:id>/',ProductoEditarView.as_view())
]