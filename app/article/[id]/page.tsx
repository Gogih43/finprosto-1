import { articlesData } from '../../../data/articles';
import Link from 'next/link';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articlesData.find((a) => a.id.toString() === params.id);

  if (!article) return <div className="text-center py-20 text-2xl font-bold">Статья не найдена</div>;

  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="text-indigo-600 hover:underline mb-8 inline-block font-semibold">
          &larr; На главную
        </Link>
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="h-64 w-full relative" style={{ background: article.imageGrad }}>
            <div className="absolute top-6 left-6">
              <span className="bg-white text-gray-900 text-sm font-bold px-4 py-2 rounded-full uppercase">{article.category}</span>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8">{article.title}</h1>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6 whitespace-pre-wrap">
              {article.content}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}