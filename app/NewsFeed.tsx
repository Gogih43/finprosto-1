import Parser from 'rss-parser';
import Link from 'next/link';

const parser = new Parser({
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
});

export const revalidate = 3600; // Кэшируем на час

async function getNews() {
  try {
    const feed = await parser.parseURL('https://lenta.ru/rss/news/economics');
    
    return feed.items.slice(0, 4).map(item => {
      // Вытаскиваем картинку из RSS Ленты (если ее вдруг нет, ставим красивую заглушку)
      const imageUrl = item.enclosure?.url || 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop';
      
      // Вытаскиваем короткий текст (описание)
      const snippet = item.contentSnippet || item.content || 'Читайте подробности на сайте источника...';

      return {
        id: item.guid || item.link || Math.random().toString(),
        title: item.title,
        description: snippet,
        link: item.link, 
        imageUrl: imageUrl,
        pubDate: "Сегодня",
        source: 'Лента Экономика'
      };
    });
  } catch (error) {
    return []; 
  }
}

export default async function NewsFeed() {
  const news = await getNews();

  if (news.length === 0) return null;

  return (
    <section className="w-full py-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Пульс рынка</h2>
        </div>

        {/* Сетка красивых карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {news.map((item) => (
            <Link 
              key={item.id} 
              href={item.link || '#'} 
              target="_blank" 
              rel="nofollow noopener noreferrer" 
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
            >
              {/* Блок с картинкой */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-200">
                {/* Плашка источника поверх картинки */}
                <div className="absolute top-3 left-3 z-10 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md">
                  {item.source}
                </div>
                
                {/* Сама картинка с эффектом приближения при наведении */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Блок с текстом */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Заголовок (максимум 2 строчки) */}
                <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-3 leading-snug">
                  {item.title}
                </h3>
                
                {/* Короткое описание (максимум 3 строчки) */}
                <p className="text-xs text-gray-500 line-clamp-3 mb-4 flex-grow leading-relaxed">
                  {item.description}
                </p>

                {/* Подвал карточки */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{item.pubDate}</span>
                  <span className="text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity text-lg font-black">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}