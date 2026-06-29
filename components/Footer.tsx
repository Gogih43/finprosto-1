// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full px-8 py-12 lg:px-16 border-t border-border bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
        <div className="lg:col-span-4 pr-4">
          <div className="text-2xl font-bold tracking-tight text-text uppercase mb-4">
            <span className="text-primary">FIN</span>ПРОСТО
          </div>
          <p className="text-sm text-secondary leading-relaxed mb-6">
            Независимый финансовый помощник. Переводим банковский язык на человеческий.
          </p>
        </div>
        <div className="lg:col-span-2 lg:col-start-6">
          <p className="text-sm font-bold text-text mb-4">Услуги</p>
          <ul className="space-y-3">
            <li><Link href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Кредит наличными</Link></li>
            <li><Link href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Автокредит</Link></li>
            <li><Link href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Ипотека</Link></li>
            <li><Link href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Лизинг авто</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="text-sm font-bold text-text mb-4">Решения</p>
          <ul className="space-y-3">
            <li><Link href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Рефинансирование</Link></li>
            <li><Link href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Реструктуризация</Link></li>
            <li><Link href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Списание долгов</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className="text-sm font-bold text-text mb-4">Компания</p>
          <ul className="space-y-3">
            <li><Link href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">О нас</Link></li>
            <li><Link href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">База знаний</Link></li>
            <li><Link href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Контакты</Link></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-secondary leading-relaxed max-w-3xl">
          © 2026 FINПРОСТО. Не является публичной офертой. Проект не является банком и не выдает кредиты. Анализ рынка на основе открытых данных ЦБ РФ.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-[11px] text-secondary hover:text-text transition-colors whitespace-nowrap">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
}