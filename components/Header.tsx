'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          
          {/* ЛОГОТИП */}
          <Link href="/" className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            FIN<span className="text-indigo-600">ПРОСТО</span>
          </Link>
          
          {/* МЕНЮ ДЛЯ КОМПЬЮТЕРА */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 font-medium text-gray-600 text-sm lg:text-base">
            <Link href="/#calculator" className="hover:text-indigo-600 transition-colors">Кредиты</Link>
            <Link href="/#credit-cards" className="hover:text-indigo-600 transition-colors">Кредитки</Link>
            <Link href="/#debit-cards" className="hover:text-indigo-600 transition-colors">Дебетовки</Link>
            <Link href="/#autoloans" className="hover:text-indigo-600 transition-colors">Авто</Link>
            <Link href="/#mortgage" className="hover:text-indigo-600 transition-colors">Ипотека</Link>
            <Link href="/#mfo" className="hover:text-indigo-600 transition-colors">Займы</Link>
            <Link href="/#bankruptcy" className="hover:text-red-600 transition-colors">Банкротство</Link>
            <Link href="/#articles" className="hover:text-indigo-600 transition-colors">Статьи</Link>
          </nav>
          
          {/* КНОПКА СПРАВА (ДЛЯ КОМПЬЮТЕРА) */}
          <div className="hidden lg:block">
            <Link href="/#calculator" className="inline-block bg-gray-100 hover:bg-indigo-50 text-indigo-700 font-bold py-2.5 px-6 rounded-xl transition-colors border border-transparent hover:border-indigo-100">
              Рассчитать ставку
            </Link>
          </div>
          
          {/* КНОПКА ГАМБУРГЕР (ДЛЯ ТЕЛЕФОНА) */}
          <button className="md:hidden text-gray-600 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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

      {/* МЕНЮ ДЛЯ ТЕЛЕФОНА (ВЫПАДАЮЩЕЕ) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-xl">
          <div className="flex flex-col px-4 pt-2 pb-6 space-y-4 font-medium text-gray-600">
            <Link href="/#calculator" onClick={() => setIsMobileMenuOpen(false)} className="text-left py-2 border-b border-gray-50">Кредиты наличными</Link>
            <Link href="/#credit-cards" onClick={() => setIsMobileMenuOpen(false)} className="text-left py-2 border-b border-gray-50">Кредитные карты</Link>
            <Link href="/#debit-cards" onClick={() => setIsMobileMenuOpen(false)} className="text-left py-2 border-b border-gray-50">Дебетовые карты</Link>
            <Link href="/#autoloans" onClick={() => setIsMobileMenuOpen(false)} className="text-left py-2 border-b border-gray-50">Автокредиты</Link>
            <Link href="/#mortgage" onClick={() => setIsMobileMenuOpen(false)} className="text-left py-2 border-b border-gray-50">Ипотека</Link>
            <Link href="/#mfo" onClick={() => setIsMobileMenuOpen(false)} className="text-left py-2 border-b border-gray-50 text-indigo-600">Займы под 0%</Link>
            <Link href="/#bankruptcy" onClick={() => setIsMobileMenuOpen(false)} className="text-left py-2 border-b border-gray-50 text-red-600">Банкротство 127-ФЗ</Link>
            <Link href="/#articles" onClick={() => setIsMobileMenuOpen(false)} className="text-left py-2 border-b border-gray-50">База знаний</Link>
          </div>
        </div>
      )}
    </header>
  );
}
