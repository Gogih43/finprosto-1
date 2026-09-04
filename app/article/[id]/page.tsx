import { articlesData } from '../../../data/articles';
import { Metadata } from 'next';
import Link from 'next/link';

// === МАГИЯ SEO: АВТОМАТИЧЕСКИЕ МЕТА-ТЕГИ ===
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const article = articlesData.find((a) => a.id.toString() === params.id);

  if (!article) {
    return { title: 'Статья не найдена | Фин просто' };
  }

  const articleUrl = `https://www.finprosto-gid.ru/article/${params.id}`;

  return {
    title: `${article.title} | Фин просто`,
    description: article.excerpt,
    alternates: { canonical: articleUrl },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: articleUrl,
    },
  };
}

// === УМНЫЙ ВЫБОР ЭКСПЕРТА (Только Имя и Должность) ===
const getExpert = (category: string) => {
  const cat = category.toLowerCase().trim();

  if (['банкротство', 'долги', 'закон', 'право'].includes(cat)) {
    return { name: "Анна Лебедева", role: "Кредитный юрист", color: "bg-red-500", initials: "АЛ" };
  }
  if (['ипотека', 'недвижимость', 'авто'].includes(cat)) {
    return { name: "Виктор Смирнов", role: "Эксперт по залогам", color: "bg-blue-600", initials: "ВС" };
  }
  if (['кредиты', 'карты', 'страхование'].includes(cat)) {
    return { name: "Денис Макаров", role: "Аналитик банковских продуктов", color: "bg-amber-500", initials: "ДМ" };
  }
  if (['инвестиции', 'сбережения', 'криптовалюта'].includes(cat)) {
    return { name: "Михаил Тарасов", role: "Финансовый аналитик", color: "bg-emerald-600", initials: "МТ" };
  }
  if (['бизнес', 'налоги', 'карьера'].includes(cat)) {
    return { name: "Елена Волкова", role: "Бизнес-консультант", color: "bg-purple-600", initials: "ЕВ" };
  }
  if (['пособия', 'пенсия', 'семья'].includes(cat)) {
    return { name: "Ольга Никитина", role: "Специалист по соц. программам", color: "bg-pink-500", initials: "ОН" };
  }
  
  return { name: "Редакция FINПРОСТО", role: "Независимая аналитика", color: "bg-gray-800", initials: "FP" };
};

// === САМА СТРАНИЦА ===
export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articlesData.find((a) => a.id.toString() === params.id);

  if (!article) return <div className="text-center py-20 text-2xl font-bold">Статья не найдена</div>;

  const expert = getExpert(article.category);

  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-10">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <Link 
          href="/#articles" 
          className="text-indigo-600 hover:text-indigo-800 mb-8 inline-flex items-center gap-2 font-bold tracking-wide transition-colors"
        >
          <span>&larr;</span> Назад к статьям
        </Link>

        <article className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="h-64 w-full relative" style={{ background: article.imageGrad }}>
            <div className="absolute top-6 left-6">
              <span className="bg-white text-gray-900 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                {article.category}
              </span>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              {article.title}
            </h1>
            
            {/* Контент статьи */}
            <div 
              className="text-lg text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* ⚡ КОМПАКТНЫЙ БЛОК ЭКСПЕРТА ⚡ */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-start">
              <div className="inline-flex items-center gap-4 bg-gray-50 py-3 px-5 rounded-2xl border border-gray-100">
                {/* Маленький кружок */}
                <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-white text-sm font-black shadow-sm ${expert.color}`}>
                  {expert.initials}
                </div>
                {/* Только имя и должность */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">{expert.name}</h4>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{expert.role}</p>
                </div>
              </div>
            </div>
            
          </div>
        </article>
      </div>
    </main>
  );
}
