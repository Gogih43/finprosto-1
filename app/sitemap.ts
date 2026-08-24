import { MetadataRoute } from 'next';
import { articlesData } from '../data/articles'; 

export default function sitemap(): MetadataRoute.Sitemap {
  // ИСПРАВЛЕНО: добавлено www
  const baseUrl = 'https://www.finprosto-gid.ru';

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articlesData.map((article) => ({
    // ИСПРАВЛЕНО: убран слэш в самом конце
    url: `${baseUrl}/article/${article.id}`, 
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...routes, ...articleRoutes];
}
