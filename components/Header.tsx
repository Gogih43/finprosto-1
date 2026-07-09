'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            FIN<span className="text-indigo-600">ПРОСТО</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <button onClick={() => scrollTo('calculator')} className="hover:text-indigo-600 transition-colors">Кредиты</button>
            <button onClick={() => scrollTo('compare')} className="hover:text-indigo-600 transition-colors">Лизинг</button>
            <button onClick={() => scrollTo('bankruptcy')} className="hover:text-red-600 text-gray-600 transition-colors">Долги и Банкротство</button>
            <button onClick={() => scrollTo('articles')} className="hover:text-indigo-600 transition-colors">Статьи</button>
          </nav>
          <div className="hidden md:block">
            <button onClick={() => scrollTo('calculator')} className="bg-gray-100 hover:bg-indigo-50 text-indigo-700 font-bold py-2.5 px-6 rounded-xl transition-colors border border-transparent hover:border-indigo-100">
              Рассчитать ставку
            </button>
          </div>
          <button className="md:hidden text-gray-600 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-xl">
          <div className="flex flex-col px-4 pt-2 pb-6 space-y-4 font-medium text-gray-600">
            <button onClick={() => scrollTo('calculator')} className="text-left py-2 border-b border-gray-50">Кредиты</button>
            <button onClick={() => scrollTo('compare')} className="text-left py-2 border-b border-gray-50">Лизинг</button>
            <button onClick={() => scrollTo('bankruptcy')} className="text-left py-2 border-b border-gray-50 text-red-600">Банкротство</button>
            <button onClick={() => scrollTo('articles')} className="text-left py-2 border-b border-gray-50">Статьи</button>
          </div>
        </div>
      )}
    </header>
  );
}