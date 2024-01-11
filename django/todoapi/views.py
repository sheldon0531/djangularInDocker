from .models import Task
from .serializers import TaskSerializer
from rest_framework import generics
from .utils import get_auth0_user_id_from_request

class TaskList(generics.ListCreateAPIView):
    """
    View all tasks.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def perform_create(self, serializer):
        auth0_user_id = get_auth0_user_id_from_request(self.request)
        # Set the user to the one in the token.
        serializer.save(created_by=auth0_user_id)

    def get_queryset(self):
        """
        This view should return a list of all Tasks
        for the currently authenticated user.
        """
        auth0_user_id = get_auth0_user_id_from_request(self.request)
        return Task.objects.filter(created_by = auth0_user_id)

class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Returns a single Task and allows updates and deletion of a Task.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    lookup_url_kwarg = 'task_id'