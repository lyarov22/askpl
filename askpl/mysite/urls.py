from django.urls import path

from . import views

app_name = ''

urlpatterns = [
    path('', views.indexView, name='index'),
    path('save_uuid/', views.save_uuid, name='save_uuid'),
]