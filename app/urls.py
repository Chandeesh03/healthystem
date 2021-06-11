from rest_framework import routers
from .api import PatientViewset

router = routers.DefaultRouter()
router.register('api/app', PatientViewset, 'app')

urlpatterns = router.urls