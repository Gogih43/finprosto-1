'use client';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <span className="text-2xl font-black text-white tracking-tight flex items-center gap-2 mb-4">
              FIN<span className="text-indigo-500">ПРОСТО</span>
            </span>
            <p className="text-sm text-gray-400 max-w-sm">
              Независимый сервис подбора финансовых услуг. Помогаем сравнивать кредиты, ипотеку и лизинг, чтобы вы принимали выгодные решения.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#calculator" className="hover:text-indigo-400 transition-colors">Калькулятор</a></li>
              <li><a href="#compare" className="hover:text-indigo-400 transition-colors">Кредит или лизинг</a></li>
              <li><a href="#bankruptcy" className="hover:text-indigo-400 transition-colors">Банкротство</a></li>
              <li><a href="#articles" className="hover:text-indigo-400 transition-colors">База знаний</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@finprosto.ru" className="hover:text-indigo-400 transition-colors">info@finprosto.ru</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-xs text-gray-500 leading-relaxed space-y-4">
          <p>
            <strong>Внимание:</strong> Проект FINПРОСТО не является финансовой организацией, банком или кредитором. 
            Сайт носит исключительно информационный характер и не осуществляет выдачу кредитов. 
            Мы не собираем и не храним персональные данные пользователей. Все решения о выдаче кредитов принимаются 
            непосредственно кредитными организациями.
          </p>
          <p>
            Информация, размещенная на сайте, не является публичной офертой, определяемой положениями 
            Статьи 437 Гражданского кодекса Российской Федерации. Финансовые условия могут быть изменены банками без предварительного уведомления.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-4 border-t border-gray-800 text-xs">
          <p>&copy; {currentYear} FINПРОСТО. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}