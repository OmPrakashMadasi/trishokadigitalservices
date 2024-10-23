import uuid
from django.db import models

# Create your models here.

import uuid
from django.db import models

class JobListing(models.Model):
    serialno = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    title = models.CharField(max_length=100)
    experience_level = models.CharField(max_length=50)
    is_immediate_joiner = models.BooleanField(default=False)  # Renamed for clarity
    location = models.CharField(max_length=100)
    minimum_qualification = models.CharField(max_length=255)
    additional_requirements1 = models.TextField(blank=True, null=True)
    additional_requirements2 = models.TextField(blank=True, null=True)
    additional_requirements3 = models.TextField(blank=True, null=True)
    additional_requirements4 = models.TextField(blank=True, null=True)
    additional_requirements5 = models.TextField(blank=True, null=True)
    additional_requirements6 = models.TextField(blank=True, null=True)
    additional_requirements7 = models.TextField(blank=True, null=True)
    additional_requirements8 = models.TextField(blank=True, null=True)
    additional_requirements9 = models.TextField(blank=True, null=True)
    additional_requirements10 = models.TextField(blank=True, null=True)

    

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class JobApplication(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)  # Changed to CharField for flexibility
    resume = models.FileField(upload_to='resumes/')
    applied_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name



class ContactUs(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=20)
    message = models.TextField()
    submitted_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"