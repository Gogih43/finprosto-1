'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { articlesData } from '../data/articles'; // Твой путь к массиву

export default function ArticlesSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const itemsPerPage = 6;

  // 1. УМНЫЕ КАТЕГОРИИ: Скрипт сам достает все уникальные рубрики из твоего массива
  const categories = useMemo(() => {
    const allCats = articlesData.map(article => article.category);
    return ['Все', ...Array.from(new Set(allCats))];
  }, []);

  // 2. ЖИВОЙ ПОИСК И ФИЛЬТРАЦИЯ
  const filteredArticles = useMemo(() => {
    return articlesData.filter(article => {
      // Проверка категории
      const matchesCategory = selectedCategory === 'Все' || article.category === selectedCategory;
      // Проверка поиска (ищем и в заголовке, и в описании)
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // 3. МАТЕМАТИКА ПАГИНАЦИИ (считаем уже отфильтрованные статьи)
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage);

  // Обработчики изменений (сбрасывают на 1 страницу при новом поиске)
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
  };

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    document.getElementById('articles-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="articles-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase">База знаний</h2>
          <p className="mt-4 text-gray-500">Отвечаем на сложные финансовые вопросы простым языком</p>
        </div>

        {/* ПАНЕЛЬ УПРАВЛЕНИЯ: ПОИСК И РУБРИКИ */}
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gray-50 p-4 rounded-2xl border border-gray-100">
          
          {/* Скроллируемая лента категорий */}
          <div className="flex overflow-x-auto gap-2 w-full md:w-auto pb-2 md:pb-0 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategory(category)}
                className={`shrink-0 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                  selectedCategory === category 
                    ? 'bg-black text-white shadow-md' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-600 hover:text-indigo-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Строка поиска */}
          <div className="relative w-full md:w-72 shrink-0">
            <input
              type="text"
              placeholder="Найти статью..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-indigo-600 focus:border-indigo-600 block pl-10 p-3 transition-colors"
            />
            {/* Иконка лупы */}
            <svg className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* СЕТКА СТАТЕЙ */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map((article) => (
              <Link 
                key={article.id} 
                href={`/article/${article.id}`} 
                className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-indigo-600 transition-all duration-300"
              >
                <div 
                  className="h-32 w-full"
                  style={{ background: article.imageGrad || 'linear-gradient(to bottom right, #3b82f6, #4f46e5)' }}
                ></div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-indigo-600 bg-indigo-50 rounded-md w-max uppercase">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xs font-semibold text-gray-400">{article.date}</span>
                    <span className="text-xs font-semibold text-gray-400">⏱ {article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // ЕСЛИ НИЧЕГО НЕ НАЙДЕНО
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <span className="text-4xl block mb-4">🕵️‍♂️</span>
            <h3 className="text-lg font-bold text-gray-900">По вашему запросу ничего не найдено</h3>
            <p className="text-gray-500 mt-2">Попробуйте изменить запрос или выбрать другую рубрику.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('Все'); }}
              className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors"
            >
              Сбросить фильтры
            </button>
          </div>
        )}

        {/* ПАГИНАЦИЯ */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button 
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all duration-200 
                ${currentPage === 1 ? 'bg-gray-50 text-gray-300 cursor-not-allowed' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
            >
              &larr;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all duration-200 
                  ${currentPage === number ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
              >
                {number}
              </button>
            ))}
            <button 
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all duration-200 
                ${currentPage === totalPages ? 'bg-gray-50 text-gray-300 cursor-not-allowed' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
            >
              &rarr;
            </button>
          </div>
        )}

      </div>
    </section>
  );
}