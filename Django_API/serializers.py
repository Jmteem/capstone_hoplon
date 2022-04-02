from rest_framework import serializers

from Django_API.models import User, RegistrationRequest, Session, Section, TimeSlot, Course, Instructor, Discipline


# class SnippetSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     title = serializers.CharField(required=False, allow_blank=True, max_length=100)
#     code = serializers.CharField(style={'base_template': 'textarea.html'})
#     linenos = serializers.BooleanField(required=False)
#     language = serializers.ChoiceField(choices=LANGUAGE_CHOICES, default='python')
#     style = serializers.ChoiceField(choices=STYLE_CHOICES, default='friendly')
#
#     def create(self, validated_data):
#         """
#         Create and return a new `Snippet` instance, given the validated data.
#         """
#         return Snippet.objects.create(**validated_data)
#
#     def update(self, instance, validated_data):
#         """
#         Update and return an existing `Snippet` instance, given the validated data.
#         """
#         instance.title = validated_data.get('title', instance.title)
#         instance.code = validated_data.get('code', instance.code)
#         instance.linenos = validated_data.get('linenos', instance.linenos)
#         instance.language = validated_data.get('language', instance.language)
#         instance.style = validated_data.get('style', instance.style)
#         instance.save()
#         return instance


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class RegistrationRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistrationRequest
        fields = '__all__'


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = '__all__'


class TimeSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeSlot
        fields = '__all__'


class DisciplineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discipline
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    subject_disciplines = DisciplineSerializer(read_only=True, many=True)

    class Meta:
        model = Course
        fields = '__all__'


class SectionSerializer(serializers.ModelSerializer):
    meetingTimes = TimeSlotSerializer(read_only=True, many=True)

    class Meta:
        model = Section
        fields = '__all__'

    def stringify(self, instance, validated_data, meetingtimestring):
        self.meetingtimestring = meetingtimestring
        # sectionMeetings = self.meetingTimes.objects.all()
        # return meetingTimeString
    # Return a prettified string of all the MeetingTimes attached to a Section(Begin Time, End Time, Meeting Day)
    # For all MeetingTimes in an Instance of Section, output a prettified string



class InstructorSerializer(serializers.ModelSerializer):
    qualifications = DisciplineSerializer(read_only=True, many=True)

    class Meta:
        model = Instructor
        fields = '__all__'
