import Parser from 'rss-parser';
import Link from 'next/link';

const parser = new Parser();

async function getNews() {
  try {
    const feed = await parser.parseURL('https://rssexport.rbc.ru/rbcnews/news/30/full.rss');
    return feed.items.slice(0, 4).map(item => ({
      id: item.guid || item.link,
      title: item.title,
      link: item.link,
      pubDate: "Сегодня",
      source: 'РБК'
    }));
  } catch (error) {
    return [];
  }
}

export default async function NewsFeed() {
  const news = await getNews();
  if (news.length === 0) return null; 

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
            <Link key={item.id} href={item.link || '#'} target="_blank" rel="nofollow noopener noreferrer" className="group block p-5 bg-white rounded-xl border border-gray-200 hover:border-indigo-600">
              <span className="text-[10px] font-bold text-gray-400">{item.source}</span>
              <h3 className="text-sm font-semibold text-gray-900 mt-2">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}