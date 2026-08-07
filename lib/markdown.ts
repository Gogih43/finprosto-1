import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Указываем папку, где лежат наши статьи
const contentDirectory = path.join(process.cwd(), 'content');

export function getAllArticles() {
  // Получаем список всех файлов в папке
  const fileNames = fs.readdirSync(contentDirectory);
  
  const allArticles = fileNames.map((fileName) => {
    // Читаем содержимое каждого файла
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matter извлекает метаданные (заголовок, дату и т.д.)
    const matterResult = matter(fileContents);

    return {
      id: matterResult.data.id || fileName.replace(/\.md$/, ''),
      title: matterResult.data.title,
      excerpt: matterResult.data.excerpt,
      category: matterResult.data.category,
      readTime: matterResult.data.readTime,
      date: matterResult.data.date,
      imageGrad: matterResult.data.imageGrad,
      content: matterResult.content, // Сам текст статьи
    };
  });

  // Сортируем статьи (например, по ID по убыванию)
  return allArticles.sort((a, b) => parseInt(b.id) - parseInt(a.id));
}

export function getArticleById(id: string) {
  const articles = getAllArticles();
  return articles.find(article => article.id === id);
}
