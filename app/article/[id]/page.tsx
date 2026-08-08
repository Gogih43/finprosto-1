'use client';
import { articlesData } from '../../../data/articles'; // проверь, правильный ли путь у тебя
import { useRouter } from 'next/navigation';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const article = articlesData.find((a) => a.id.toString() === params.id);

  if (!article) return <div className="text-center py-20 text-2xl font-bold">Статья не найдена</div>;

  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-10">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Умная кнопка НАЗАД */}
        <button 
          onClick={() => router.back()} 
          className="text-indigo-600 hover:text-indigo-800 mb-8 inline-flex items-center gap-2 font-bold tracking-wide transition-colors"
        >
          <span>&larr;</span> Назад к статьям
        </button>

        <article className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="h-64 w-full relative" style={{ background: article.imageGrad }}>
            <div className="absolute top-6 left-6">
              <span className="bg-white text-gray-900 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">{article.category}</span>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">{article.title}</h1>
            
            {/* Контент статьи */}
            <div 
              className="text-lg text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
          </div>
        </article>
      </div>
    </main>
  );
}