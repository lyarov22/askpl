from django.contrib import admin
from .models import UUIDEntry  # Импортируйте модель UUIDEntry из вашего приложения

@admin.register(UUIDEntry)
class UUIDEntryAdmin(admin.ModelAdmin):
    list_display = ('uuid', 'name', 'surname', 'group')  # Определите, какие поля будут отображаться в списке записей в админ-панели
    search_fields = ('uuid', 'name', 'surname', 'group')  # Добавьте поля для поиска
