from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse

from .models import UUIDEntry
from django.views.decorators.csrf import csrf_exempt


def indexView(request):
    return HttpResponse("Hello, World!")


@csrf_exempt
def save_uuid(request):
    if request.method == 'POST':
        uuid = request.POST.get('uid')
        existing_entry = UUIDEntry.objects.filter(uuid=uuid).first()
        
        if existing_entry:
            return JsonResponse({'message': 'UUID already exists'})

        new_entry = UUIDEntry(uuid=uuid)
        new_entry.save()
        return JsonResponse({'message': 'UUID save'})
    else:
        return JsonResponse({'error': 'uuid cant find'}, status=400)
