from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name="home"),
    path('script/',views.scripting,name="scripting"),
    path('transcript/',views.transcript,name="transcript")
]
