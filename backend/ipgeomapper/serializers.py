
from rest_framework import serializers

class IPGeolocationSerializer(serializers.Serializer):
    country = serializers.CharField()
    city = serializers.CharField()
