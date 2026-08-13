import { MetadataRoute } from 'next';
// Подключаем твой массив со статьями (проверь правильность пути к файлу, вроде он в папке data)
import { articlesData } from '../data/articles'; 

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://finprosto-gid.ru';

  // 1. Добавляем главную страницу
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-08-12'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 2. Автоматически перебираем все 300 статей из массива
  const articleRoutes: MetadataRoute.Sitemap = articlesData.map((article) => ({
    url: `${baseUrl}/article/${article.id}`, // ВАЖНО: убедись, что у тебя урл статей выглядит именно так (/article/1)
    lastModified: new Date('2026-08-12'),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. Склеиваем и отдаем Гуглу
  return [...routes, ...articleRoutes];
}
