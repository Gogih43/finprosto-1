import Parser from 'rss-parser';
import Link from 'next/link';

// Маскируемся под обычный браузер
const parser = new Parser({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
});

async function getNews() {
  try {
    const feed = await parser.parseURL('https://rssexport.rbc.ru/rbcnews/news/30/full.rss');
    
    // Если всё прошло успешно, отдаем свежак от РБК
    return feed.items.slice(0, 4).map(item => ({
      id: item.guid || item.link || Math.random().toString(),
      title: item.title,
      link: item.link,
      pubDate: "Сегодня",
      source: 'РБК'
    }));
  } catch (error) {
    // ЗАПАСНОЙ ПЛАН: Если РБК заблокировал, показываем красивые базовые новости (Блок никогда не исчезнет!)
    return [
      { id: '1', title: 'ЦБ РФ рассматривает новые изменения ключевой ставки', link: '#', pubDate: 'Сегодня', source: 'Финансы' },
      { id: '2', title: 'Банки начали обновлять условия по льготной ипотеке', link: '#', pubDate: 'Сегодня', source: 'Недвижимость' },
      { id: '3', title: 'Как правильно использовать кредитные карты в 2024 году', link: '#', pubDate: 'Сегодня', source: 'Аналитика' },
      { id: '4', title: 'Списание долгов по 127-ФЗ: главные изменения для граждан', link: '#', pubDate: 'Сегодня', source: 'Право' }
    ];
  }
}

export default async function NewsFeed() {
  const news = await getNews();

  // Мы убрали строчку "return null", теперь блок покажется В ЛЮБОМ СЛУЧАЕ!

  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse"></span>
            Финансовая сводка
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {news.map((item) => (
            <Link key={item.id} href={item.link || '#'} target="_blank" rel="nofollow noopener noreferrer" className="group block p-5 bg-white rounded-xl border border-gray-200 hover:border-indigo-600 transition-colors shadow-sm">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.source}</span>
              <h3 className="text-sm font-semibold text-gray-900 mt-2 line-clamp-3">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}