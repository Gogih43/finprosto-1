import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // ИСПРАВЛЕНО: добавлено www.
    sitemap: 'https://www.finprosto-gid.ru/sitemap.xml',
  };
}
