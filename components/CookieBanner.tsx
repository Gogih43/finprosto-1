'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem('cookiesAccepted');
    if (!isAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-[100] bg-white border border-gray-100 shadow-2xl rounded-2xl p-6 max-w-[400px] animate-fade-in">
      <div className="flex items-start gap-4">
        
        {/* Строгая корпоративная иконка */}
        <div className="flex-shrink-0 text-indigo-600 mt-0.5">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Мы обрабатываем cookies, чтобы сделать наш сайт удобнее и персонализированее для вас. 
            Подробнее: <Link href="/privacy" className="text-indigo-600 font-medium hover:underline">политика использования cookies</Link> и защита данных.
          </p>
          <div className="flex gap-3">
            <button 
              onClick={acceptCookies}
              className="flex-1 bg-gray-900 hover:bg-indigo-600 text-white font-bold py-2.5 rounded-xl transition-colors text-sm shadow-md"
            >
              Согласен
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}