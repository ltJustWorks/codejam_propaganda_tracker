from django.shortcuts import render

# Create your views here.
# Inside fact_checker_app/views.py
from django.http import JsonResponse

from .utils.fact_checker import tweet_fact_checker


def fact_check_view(request):
    if "input_string" in request.GET:
        input_string = request.GET["input_string"]
        response = tweet_fact_checker(input_string)
        print(response)
        return JsonResponse({"result": response})
    else:
        return JsonResponse({"error": "Please provide an input string."})
