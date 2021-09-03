from django.urls import path
from rest_framework.serializers import as_serializer_error
from .views import BlogPostListView, BlogPostDetailView, BlogPostFeaturedView, BlogPostCategoryView


urlpatterns = [
    path('', BlogPostListView.as_view()),
    path('featured', BlogPostFeaturedView.as_view()),
    path('category', BlogPostCategoryView.as_view()),
    path('<slug>', BlogPostDetailView.as_view()),

]