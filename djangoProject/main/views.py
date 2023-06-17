import requests
from django.shortcuts import render

# Create your views here.
def get_data(request):
    url = 'https://jsonplaceholder.typicode.com/todos/' # ссылка на api
    response = requests.get(url) # получаем ответ
    data = response.json() # все данные конвертируем в JSON формат

    return render(request, 'home.html', {'data': data})