import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
// ПОДКЛЮЧАЕМ МЕТРИКУ
import YandexMetrika from '@/components/YandexMetrika'; 

const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ["cyrillic", "latin"],
  variable: '--font-roboto'
});

const robotoMono = Roboto_Mono({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["cyrillic", "latin"],
  variable: '--font-roboto-mono'
});

export const metadata: Metadata = {
  title: "FINПРОСТО — Честный подбор кредитов и лизинга",
  description: "Независимый финансовый помощник. Сравниваем реальные условия банков, переплаты и скрытые комиссии. Автокредит, рефинансирование, лизинг.",
  verification: {
    yandex: 'd5853ae0415c706c',
    google: 'pkBd6cFffMTz6aIu9egTNKrpbySZVX3nQXTTu2Uj5dk',
  },
  // ⚡ ВОТ ЭТА КОМАНДА ЗАСТАВИТ ТУПОГО РОБОТА ЯНДЕКСА УВИДЕТЬ ВАШ FAVICON
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${roboto.variable} ${robotoMono.variable}`}>
      <body className="bg-background text-text font-sans antialiased p-4 lg:p-6 min-h-screen">
        
        {/* ГЛАВНЫЙ БЕЛЫЙ КОНТЕЙНЕР СО СКРУГЛЕНИЯМИ */}
        <div className="w-full max-w-[1320px] mx-auto bg-white rounded-[2rem] shadow-app border border-border overflow-hidden flex flex-col relative z-10">
          
          {children}
          
        </div>

        {/* НЕВИДИМЫЙ СКРИПТ МЕТРИКИ */}
        <YandexMetrika />

      </body>
    </html>
  );
}