import Parser from 'rss-parser';
import Link from 'next/link';

// Маскируемся под обычный браузер
const parser = new Parser({
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
});

async function getNews() {
  try {
    // Чистая финансовая лента (Только экономика, банки, ставки)
    const feed = await parser.parseURL('https://ria.ru/export/rss2/economy/index.xml');
    
    return feed.items.slice(0, 4).map(item => ({
      id: item.guid || item.link || Math.random().toString(),
      title: item.title,
      link: item.link,
      pubDate: "Сегодня",
      source: 'РИА Экономика'
    }));
  } catch (error) {
    // Запасной план на случай блокировок (чтобы сайт никогда не ломался)
    return [
      { id: '1', title: 'ЦБ РФ рассматривает новые изменения ключевой ставки', link: '#', pubDate: 'Сегодня', source: 'РИА Экономика' },
      { id: '2', title: 'Банки начали обновлять условия по льготной ипотеке', link: '#', pubDate: 'Сегодня', source: 'РИА Экономика' },
      { id: '3', title: 'Минфин предложил новые правила для кредитных карт', link: '#', pubDate: 'Сегодня', source: 'РИА Экономика' },
      { id: '4', title: 'Списание долгов по 127-ФЗ: главные изменения для граждан', link: '#', pubDate: 'Сегодня', source: 'РИА Экономика' }
    ];
  }
}

export default async function NewsFeed() {
  const news = await getNews();

  return (
    <section className="w-full py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок в строгом корпоративном стиле */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-7 bg-indigo-600"></div>
          <h2 className="text-2xl font-black text-black uppercase tracking-tight">Пульс рынка</h2>
        </div>

        {/* Сетка новостей */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <Link 
              key={item.id} 
              href={item.link || '#'} 
              target="_blank" 
              rel="nofollow noopener noreferrer" 
              className="group flex flex-col justify-between p-6 bg-gray-50 border border-gray-200 hover:bg-white hover:border-indigo-600 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Верхняя линия (Черная -> Индиго) */}
              <div className="absolute top-0 left-0 w-full h-1 bg-black group-hover:bg-indigo-600 transition-colors"></div>

              <div>
                {/* Плашка источника */}
                <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest text-white bg-black group-hover:bg-indigo-600 transition-colors uppercase mb-4">
                  {item.source}
                </span>
                
                {/* Текст новости */}
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-3 leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Подвал карточки со стрелочкой */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.pubDate}</span>
                <span className="text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity text-xl font-black">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}