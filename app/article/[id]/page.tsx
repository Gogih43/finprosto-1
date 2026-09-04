import { articlesData } from '../../../data/articles'; // проверь путь к файлу
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

// === УМНЫЙ ВЫБОР ЭКСПЕРТА (6 ЭКСПЕРТОВ + РЕДАКЦИЯ) ===
const getExpert = (category: string) => {
  const cat = category.toLowerCase().trim();

  // 1. Юрист
  if (['банкротство', 'долги', 'закон', 'право'].includes(cat)) {
    return {
      name: "Анна Лебедева", role: "Кредитный юрист", color: "bg-red-500", initials: "АЛ",
      text: "Анализирую законы и помогаю законно избавиться от долгов. Слежу за тем, чтобы банки и коллекторы не нарушали права заемщиков."
    };
  }
  // 2. Ипотека и Авто
  if (['ипотека', 'недвижимость', 'авто'].includes(cat)) {
    return {
      name: "Виктор Смирнов", role: "Эксперт по залогам", color: "bg-blue-600", initials: "ВС",
      text: "Проверяю скрытые условия в договорах на крупные суммы. Моя цель — уберечь вас от переплат и навязанных страховок на длинных дистанциях."
    };
  }
  // 3. Банковский сектор
  if (['кредиты', 'карты', 'страхование'].includes(cat)) {
    return {
      name: "Денис Макаров", role: "Аналитик банковских продуктов", color: "bg-amber-500", initials: "ДМ",
      text: "Разбираю тарифы банков под микроскопом. Помогаю найти реальную выгоду среди маркетинговых уловок по кредиткам и кредитам наличными."
    };
  }
  // 4. Инвестиции
  if (['инвестиции', 'сбережения', 'криптовалюта'].includes(cat)) {
    return {
      name: "Михаил Тарасов", role: "Финансовый аналитик", color: "bg-emerald-600", initials: "МТ",
      text: "Помогаю сохранить и приумножить капитал. Анализирую ставки по вкладам, фондовый рынок и новые цифровые активы."
    };
  }
  // 5. Бизнес и Налоги
  if (['бизнес', 'налоги', 'карьера'].includes(cat)) {
    return {
      name: "Елена Волкова", role: "Бизнес-консультант", color: "bg-purple-600", initials: "ЕВ",
      text: "Объясняю сложные налоговые режимы простым языком. Помогаю ИП и самозанятым оптимизировать расходы и не получать штрафы от ФНС."
    };
  }
  // 6. Социальная сфера
  if (['пособия', 'пенсия', 'семья'].includes(cat)) {
    return {
      name: "Ольга Никитина", role: "Специалист по соц. программам", color: "bg-pink-500", initials: "ОН",
      text: "Слежу за новыми выплатами от государства. Пишу пошаговые инструкции, как получить материнский капитал, льготы и надбавки к пенсии."
    };
  }
  
  // 7. Дефолт (Редакция) для Лайфхаков, Безопасности, Новостей и т.д.
  return {
    name: "Редакция FINПРОСТО", role: "Независимая аналитика", color: "bg-gray-800", initials: "FP",
    text: "Мы ежедневно мониторим финансовый рынок, изучаем законы РФ и мошеннические схемы, чтобы предоставлять вам только проверенную информацию."
  };
};

// === САМА СТРАНИЦА ===
export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articlesData.find((a) => a.id.toString() === params.id);

  if (!article) return <div className="text-center py-20 text-2xl font-bold">Статья не найдена</div>;

  // Вызываем функцию для получения эксперта
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
            
            {/* ⚡ ВЕЧНЫЙ БЛОК ЭКСПЕРТА ДЛЯ SEO (БЕЗ КАРТИНОК) ⚡ */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 border border-gray-200">
                
                {/* CSS Аватарка с инициалами */}
                <div className={`w-20 h-20 shrink-0 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-md ${expert.color}`}>
                  {expert.initials}
                </div>

                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-gray-900">{expert.name}</h4>
                  <p className="text-sm font-bold text-indigo-600 mb-3 uppercase tracking-wider">{expert.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {expert.text}
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </article>
      </div>
    </main>
  );
}
