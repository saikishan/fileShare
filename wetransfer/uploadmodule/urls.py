from django.urls import path

from . import views


app_name = 'uploadmodule'
urlpatterns = [
    path('', views.HomePageView.as_view(), name='index'),
]