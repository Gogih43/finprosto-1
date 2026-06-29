// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-5 border-b border-border bg-white z-50 sticky top-0">
      <div className="text-2xl font-bold tracking-tight text-text uppercase">
        <span className="text-primary">FIN</span>ПРОСТО
      </div>
      <nav className="hidden md:flex gap-8 text-[15px] font-medium text-secondary">
        <Link href="#" className="hover:text-text transition-colors">Кредиты</Link>
        <Link href="#" className="hover:text-text transition-colors">Авто</Link>
        <Link href="#" className="hover:text-text transition-colors">Ипотека</Link>
        <Link href="#" className="hover:text-text transition-colors">Лизинг</Link>
        <Link href="#" className="hover:text-text transition-colors">Долги</Link>
        <Link href="#" className="hover:text-text transition-colors">Статьи</Link>
      </nav>
      <div className="hidden md:flex items-center justify-center px-6 py-2.5 bg-background border border-border text-text font-medium rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
        Войти
      </div>
    </header>
  );
}