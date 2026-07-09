'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Проверяем при загрузке: если юзер уже жал кнопку, больше не показываем
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
    <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-[100] bg-white border border-gray-100 shadow-2xl rounded-2xl p-6 max-w-sm animate-fade-in">
      <div className="flex items-start gap-4">
        {/* Иконка печеньки */}
        <div className="text-3xl">🍪</div>
        <div>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Мы используем файлы cookie для аналитики и улучшения работы сервиса. Оставаясь с нами, вы соглашаетесь с{' '}
            <Link href="/privacy" className="text-indigo-600 hover:underline">
              Политикой конфиденциальности
            </Link>.
          </p>
          <button 
            onClick={acceptCookies}
            // Кнопка в нашем фирменном стиле: черная -> синяя
            className="w-full bg-gray-900 hover:bg-indigo-600 text-white font-bold py-2.5 rounded-xl transition-colors text-sm shadow-md"
          >
            Хорошо, понятно
          </button>
        </div>
      </div>
    </div>
  );
}