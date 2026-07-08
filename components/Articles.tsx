'use client';
import Link from 'next/link';
import { articlesData } from '../data/articles';

export default function Articles() {
  return (
    <section className="py-20 bg-white" id="articles">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Финансовая грамотность
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl">
              Наши эксперты разбирают сложные финансовые вопросы простым языком. Помогаем экономить деньги и не попадать в ловушки банков.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articlesData.map((article) => (
            <Link 
              href={`/article/${article.id}`}
              key={article.id} 
              className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="h-48 w-full relative overflow-hidden" style={{ background: article.imageGrad }}>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-gray-400 font-medium mb-3">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-3">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <span className="text-indigo-600 font-semibold text-sm group-hover:underline">
                    Читать полностью
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}