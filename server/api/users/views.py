from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from users.serializers import UserSerializer, GroupSerializer

# Method the current user can use to find their user ID
@api_view(['GET'])
def current_user(request):
    if request.user.is_authenticated():
        return Response({'id': request.user.id,})
    return Resonse({})

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
