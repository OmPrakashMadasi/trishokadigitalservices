from django.urls import path
from .views import *

urlpatterns = [
    path('jobs/', JobListingList.as_view(), name='jobs'),
    path('applications/', JobApplicationCreate.as_view(), name='applications'),
    path('contactus/',ContactUsCreate.as_view(), name='contactus'),
]