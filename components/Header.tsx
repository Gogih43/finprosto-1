'use client';
import { useState } from 'react';
import Link from 'next/link';
import BankruptcyModal from './BankruptcyModal'; // 👈 Подключаем модалку

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBankruptcyOpen, setIsBankruptcyOpen] = useState(false); // 👈 Состояние модалки

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Функция для кнопки "Долги и Банкротство"
  const handleBankruptcyClick = () => {
    setIsMobileMenuOpen(false); // Закрываем мобильное меню, если оно открыто
    setIsBankruptcyOpen(true);  // Открываем квиз
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center h-20">
            
            {/* ЛОГОТИП */}
            <Link href="/" className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              FIN<span className="text-indigo-600">ПРОСТО</span>
            </Link>

            {/* НАВИГАЦИЯ (ДЕСКТОП) */}
            <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
              <button onClick={() => scrollTo('calculator')} className="hover:text-indigo-600 transition-colors">Кредиты</button>
              <button onClick={() => scrollTo('compare')} className="hover:text-indigo-600 transition-colors">Лизинг</button>
              <button onClick={handleBankruptcyClick} className="hover:text-red-600 text-gray-600 transition-colors">Долги и Банкротство</button>
              <button onClick={() => scrollTo('articles')} className="hover:text-indigo-600 transition-colors">Статьи</button>
            </nav>

            {/* КНОПКА CTA */}
            <div className="hidden md:block">
              <button 
                onClick={() => scrollTo('calculator')}
                className="bg-gray-100 hover:bg-indigo-50 text-indigo-700 font-bold py-2.5 px-6 rounded-xl transition-colors border border-transparent hover:border-indigo-100"
              >
                Рассчитать ставку
              </button>
            </div>

            {/* ГАМБУРГЕР (МОБИЛКИ) */}
            <button 
              className="md:hidden text-gray-600 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* МОБИЛЬНОЕ МЕНЮ */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-xl">
            <div className="flex flex-col px-4 pt-2 pb-6 space-y-4 font-medium text-gray-600">
              <button onClick={() => scrollTo('calculator')} className="text-left py-2 border-b border-gray-50">Кредиты</button>
              <button onClick={() => scrollTo('compare')} className="text-left py-2 border-b border-gray-50">Лизинг</button>
              <button onClick={handleBankruptcyClick} className="text-left py-2 border-b border-gray-50 text-red-600">Долги и Банкротство</button>
              <button onClick={() => scrollTo('articles')} className="text-left py-2 border-b border-gray-50">Статьи</button>
              <button onClick={() => scrollTo('calculator')} className="bg-indigo-600 text-white font-bold py-3 rounded-xl mt-4 text-center">
                Рассчитать ставку
              </button>
            </div>
          </div>
        )}
      </header>

      {/* РЕНДЕРИМ МОДАЛКУ ПРЯМО ИЗ ХЕДЕРА */}
      <BankruptcyModal 
        isOpen={isBankruptcyOpen} 
        onClose={() => setIsBankruptcyOpen(false)} 
      />
    </>
  );
}