'use client';
import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { articlesData } from '../data/articles'; 

const safeArticles = Array.isArray(articlesData) ? articlesData : [];

export default function ArticlesSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const itemsPerPage = 6;

  // ВОССТАНАВЛИВАЕМ ПАМЯТЬ ПРИ ВОЗВРАТЕ НА СТРАНИЦУ
  useEffect(() => {
    const savedPage = sessionStorage.getItem('finPage');
    const savedCat = sessionStorage.getItem('finCat');
    const savedSearch = sessionStorage.getItem('finSearch');

    if (savedPage) setCurrentPage(Number(savedPage));
    if (savedCat) setSelectedCategory(savedCat);
    if (savedSearch) setSearchQuery(savedSearch);
  }, []);

  const categories = useMemo(() => {
    const allCats = safeArticles.map((article: any) => article.category || 'Без рубрики');
    return ['Все', ...Array.from(new Set(allCats))];
  }, []);

  const filteredArticles = useMemo(() => {
    return safeArticles.filter((article: any) => {
      const matchesCategory = selectedCategory === 'Все' || article.category === selectedCategory;
      const matchesSearch = 
        (article.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
        (article.excerpt?.toLowerCase() || '').includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    setCurrentPage(1); 
    sessionStorage.setItem('finSearch', val);
    sessionStorage.setItem('finPage', '1');
  };

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    sessionStorage.setItem('finCat', category);
    sessionStorage.setItem('finPage', '1');
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    sessionStorage.setItem('finPage', pageNumber.toString());
    setTimeout(() => {
      document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  if (safeArticles.length === 0) {
    return (
      <section id="articles" className="w-full py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          База знаний обновляется...
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="w-full py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-1.5 h-7 bg-indigo-600"></div>
              <h2 className="text-2xl font-black text-black uppercase tracking-tight">База знаний</h2>
            </div>
            <p className="text-sm text-gray-500 ml-5 md:ml-6">Отвечаем на сложные финансовые вопросы простым языком</p>
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <input
              type="text"
              placeholder="Поиск по статьям..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block pl-10 p-2.5 transition-colors"
            />
            <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="mb-8 flex overflow-x-auto gap-2 pb-2 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategory(category)}
              className={`shrink-0 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === category 
                  ? 'bg-black text-white shadow-md' 
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-indigo-600 hover:text-indigo-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentArticles.map((article: any) => (
              <Link 
                key={article.id} 
                href={`/article/${article.id}`} 
                className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-indigo-600 transition-all duration-300"
              >
                <div 
                  className="h-2 flex-shrink-0 w-full"
                  style={{ background: article.imageGrad || 'linear-gradient(to right, #3b82f6, #4f46e5)' }}
                ></div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block px-2 py-1 mb-4 text-[10px] font-bold tracking-widest text-indigo-600 bg-indigo-50 rounded uppercase w-max">
                    {article.category}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-3 line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{article.date}</span>
                    <span className="text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity text-lg font-black">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Ничего не найдено</h3>
            <p className="text-xs text-gray-500 mt-2">Попробуйте изменить запрос.</p>
            <button 
              onClick={() => { 
                setSearchQuery(''); 
                setSelectedCategory('Все'); 
                sessionStorage.removeItem('finSearch');
                sessionStorage.removeItem('finCat');
              }}
              className="mt-4 px-4 py-2 bg-black hover:bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
            >
              Сбросить
            </button>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button 
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-9 h-9 flex items-center justify-center rounded-md font-bold transition-all duration-200 
                ${currentPage === 1 ? 'bg-gray-50 text-gray-300 cursor-not-allowed border border-gray-100' : 'bg-white border border-gray-200 text-gray-900 hover:border-indigo-600 hover:text-indigo-600'}`}
            >
              &larr;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`w-9 h-9 flex items-center justify-center rounded-md font-bold transition-all duration-200 
                  ${currentPage === number ? 'bg-black text-white' : 'bg-white border border-gray-200 text-gray-900 hover:border-indigo-600 hover:text-indigo-600'}`}
              >
                {number}
              </button>
            ))}
            <button 
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-9 h-9 flex items-center justify-center rounded-md font-bold transition-all duration-200 
                ${currentPage === totalPages ? 'bg-gray-50 text-gray-300 cursor-not-allowed border border-gray-100' : 'bg-white border border-gray-200 text-gray-900 hover:border-indigo-600 hover:text-indigo-600'}`}
            >
              &rarr;
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
