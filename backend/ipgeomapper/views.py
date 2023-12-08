# ipgeomapper/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from decouple import config

class IPGeolocationView(APIView):
    def get(self, request, ip_address):
        try:
            api_key = config('API_KEY')
            # Make a GET request to the IP geolocation service (replace with your preferred service)
            response = requests.get(f"https://api.ipgeolocation.io/ipgeo?apiKey={api_key}&ip={ip_address}")

            if response.status_code == 200:
                data = response.json()
                return Response(data)
            else:
                return Response({"error": "Failed to fetch geolocation data"}, status=400)
        except Exception as e:
            return Response({"error": str(e)}, status=400)
