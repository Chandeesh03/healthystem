from .models import Patient
from rest_framework import viewsets, permissions
from .serializers import PatientSerializer

class PatientViewset(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    permission_classes= [
        permissions.AllowAny
    ]
    serializer_class = PatientSerializer
