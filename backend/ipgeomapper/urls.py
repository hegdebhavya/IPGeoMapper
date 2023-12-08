from django.urls import path
from .views import IPGeolocationView

urlpatterns = [
    path('ip-geolocation/<str:ip_address>/', IPGeolocationView.as_view(), name='ip-geolocation'),
]