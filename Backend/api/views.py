from django.shortcuts import render
import requests
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry
from django.http import JsonResponse

from rest_framework import generics
from .serializers import *
from .models import *
from rest_framework import status
from rest_framework.response import Response

# Create your views here.

# List and Create Job Listings
class JobListingList(generics.ListAPIView):
    queryset = JobListing.objects.all()
    serializer_class = JobListingSerializer

class JobApplicationCreate(generics.CreateAPIView):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Contact Us View
class ContactUsCreate(generics.CreateAPIView):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





def make_request_with_retries(url, max_retries=3):
    session = requests.Session()
    retries = Retry(total=max_retries,
                    backoff_factor=1,
                    status_forcelist=[500, 502, 503, 504])
    session.mount('http://', HTTPAdapter(max_retries=retries))
    session.mount('https://', HTTPAdapter(max_retries=retries))

    response = session.get(url)
    response.raise_for_status()  # Raises an HTTPError for bad responses
    return response.json()

def fetch_user_data(request):
    url = 'https://localhost:8000/'  # Replace with your actual API endpoint
    try:
        data = make_request_with_retries(url)
        return JsonResponse(data)
    except requests.exceptions.RequestException as e:
        return JsonResponse({'error': str(e)}, status=500)