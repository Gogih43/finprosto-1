import Link from 'next/link';

async function getNews() {
  try {
    // Используем спец-сервис для обхода блокировки РИА Новостей
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://ria.ru/export/rss2/economy/index.xml', {
      next: { revalidate: 3600 } // Обновляем раз в час
    });
    
    if (!res.ok) throw new Error('Блокировка');
    const data = await res.json();

    return data.items.slice(0, 4).map((item: any) => ({
      id: item.guid || item.link,
      title: item.title,
      link: item.link, // Настоящая ссылка на конкретную новость
      pubDate: "Сегодня",
      source: 'РИА Экономика'
    }));
  } catch (error) {
    // ЗАПАСНОЙ ПЛАН: Если РИА все же упадет, тут стоят РЕАЛЬНЫЕ ссылки, а не решетки!
    return [
      { id: '1', title: 'Последние новости российской и мировой экономики', link: 'https://ria.ru/economy/', pubDate: 'Сегодня', source: 'РИА Экономика' },
      { id: '2', title: 'Актуальные ставки по кредитам и льготной ипотеке', link: 'https://ria.ru/economy/', pubDate: 'Сегодня', source: 'РИА Экономика' },
      { id: '3', title: 'Обзор финансовых рынков, инфляции и курсов валют', link: 'https://ria.ru/economy/', pubDate: 'Сегодня', source: 'РИА Экономика' },
      { id: '4', title: 'Решения Центробанка РФ и прогнозы аналитиков', link: 'https://ria.ru/economy/', pubDate: 'Сегодня', source: 'РИА Экономика' }
    ];
  }
}

export default async function NewsFeed() {
  const news = await getNews();

  return (
    <section className="w-full py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-7 bg-indigo-600"></div>
          <h2 className="text-2xl font-black text-black uppercase tracking-tight">Пульс рынка</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <Link 
              key={item.id} 
              href={item.link} 
              target="_blank" 
              rel="nofollow noopener noreferrer" 
              className="group flex flex-col justify-between p-6 bg-gray-50 border border-gray-200 hover:bg-white hover:border-indigo-600 hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-black group-hover:bg-indigo-600 transition-colors"></div>

              <div>
                <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest text-white bg-black group-hover:bg-indigo-600 transition-colors uppercase mb-4">
                  {item.source}
                </span>
                
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-3 leading-snug">
                  {item.title}
                </h3>
              </div>

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