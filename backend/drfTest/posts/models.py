from django.db import models


class Post(models.Model):
    title = models.CharField("Заголовок", max_length=200)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE, editable=False)
    text = models.TextField("Текст")
    created_at = models.DateTimeField("Время создания", auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title
