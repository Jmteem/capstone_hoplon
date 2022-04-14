"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from Django_API.views import InstructorList, InstructorDetail, UserList, UserDetail, RegistrationRequestList, \
    RegistrationRequestDetail, SessionList, SessionDetail, TimeSlotList, TimeSlotDetail, CourseList, CourseDetail, \
    SectionList, SectionDetail, DisciplineView, SolutionList
from .views import index


urlpatterns = [
    path('', index, name='index'),
    path('admin/', admin.site.urls),
    path('api/instructor/', InstructorList.as_view(), name='instructors'),
    path('api/instructor/<int:instructor_id>', InstructorDetail.as_view(), name='instructor'),

    path('api/user/', UserList.as_view(), name='users'),
    path('api/user/<int:user_id>', UserDetail.as_view(), name='user'),

    path('api/registrationrequest/', RegistrationRequestList.as_view(), name='registrationrequests'),
    path('api/registrationrequest/<int:registration_request_id>', RegistrationRequestDetail.as_view(), name='registrationrequest'),

    path('api/session/', SessionList.as_view(), name='sessions'),
    path('api/session/<int:session_id>', SessionDetail.as_view(), name='session'),
    path('api/timeslot/', TimeSlotList.as_view(), name='timeslots'),
    path('api/timeslot/<int:time_slot_id>', TimeSlotDetail.as_view(), name='timeslot'),

    path('api/course/', CourseList.as_view(), name='courses'),
    path('api/course/<int:course_id>', CourseDetail.as_view(), name='course'),

    path('api/instructor/', InstructorList.as_view(), name='instructors'),
    path('api/instructor/<int:instructor_id>', InstructorDetail.as_view(), name='instructor'),

    path('api/section/', SectionList.as_view(), name='sections'),
    path('api/section/<int:section_id>', SectionDetail.as_view(), name='section'),

    path('api/discipline/', DisciplineView.as_view(), name='disciplines'),

    path('api/solution/', SolutionList.as_view(), name='solutions')
]

urlpatterns = format_suffix_patterns(urlpatterns)
