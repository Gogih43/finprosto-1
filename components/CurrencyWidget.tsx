'use client';
import { useState, useEffect } from 'react';

type Currency = {
  Value: number;
};

export default function CurrencyWidget() {
  const [rates, setRates] = useState<{ USD?: Currency; EUR?: Currency; CNY?: Currency }>({});
  const [lastUpdate, setLastUpdate] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(res => res.json())
      .then(data => {
        setRates({
          USD: data.Valute.USD,
          EUR: data.Valute.EUR,
          CNY: data.Valute.CNY
        });
        const updateDate = new Date(data.Date);
        setLastUpdate(updateDate.toLocaleDateString('ru-RU'));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return null;

  const getBankRates = (cbrValue: number) => ({
    buy: (cbrValue - 2.5).toFixed(2),
    sell: (cbrValue + 3.5).toFixed(2),
    cbr: cbrValue.toFixed(2)
  });

  const usd = rates.USD ? getBankRates(rates.USD.Value) : null;
  const eur = rates.EUR ? getBankRates(rates.EUR.Value) : null;
  const cny = rates.CNY ? { 
    buy: (rates.CNY.Value - 0.3).toFixed(2), 
    sell: (rates.CNY.Value + 0.5).toFixed(2),
    cbr: rates.CNY.Value.toFixed(2) 
  } : null;

  const CurrencyData = () => (
    <div className="flex items-center gap-8 md:gap-12 pr-8 md:pr-12 shrink-0 whitespace-nowrap">
      {usd && (
        <div className="flex items-center gap-3">
          <div className="text-white font-black text-sm flex items-center gap-1.5 bg-gray-800 px-3 py-1 rounded-md">
            <span>🇺🇸</span> USD
          </div>
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="text-gray-500 hidden sm:inline">ЦБ: {usd.cbr}</span>
            <span className="text-green-400">Покупка {usd.buy} ₽</span>
            <span className="text-red-400">Продажа {usd.sell} ₽</span>
          </div>
        </div>
      )}

      {eur && (
        <div className="flex items-center gap-3">
          <div className="text-white font-black text-sm flex items-center gap-1.5 bg-gray-800 px-3 py-1 rounded-md">
            <span>🇪🇺</span> EUR
          </div>
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="text-gray-500 hidden sm:inline">ЦБ: {eur.cbr}</span>
            <span className="text-green-400">Покупка {eur.buy} ₽</span>
            <span className="text-red-400">Продажа {eur.sell} ₽</span>
          </div>
        </div>
      )}

      {cny && (
        <div className="flex items-center gap-3">
          <div className="text-white font-black text-sm flex items-center gap-1.5 bg-gray-800 px-3 py-1 rounded-md">
            <span>🇨🇳</span> CNY
          </div>
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="text-gray-500 hidden sm:inline">ЦБ: {cny.cbr}</span>
            <span className="text-green-400">Покупка {cny.buy} ₽</span>
            <span className="text-red-400">Продажа {cny.sell} ₽</span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    // Главный контейнер теперь просто flex
    <div className="bg-gray-900 border-b border-gray-800 h-12 flex items-center overflow-hidden w-full">
      
      {/* Левая плашка (перестала быть absolute, теперь она shrink-0, чтобы не сжиматься) */}
      <div className="h-full z-20 shrink-0 bg-gray-900 px-3 md:px-4 flex items-center border-r border-gray-800 shadow-[10px_0_15px_-5px_rgba(17,24,39,1)]">
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-gray-300 text-[10px] md:text-xs font-bold uppercase tracking-wide whitespace-nowrap">
          {/* Адаптивный текст: на ПК длинный, на мобилке короткий */}
          <span className="hidden sm:inline">Средний курс </span>
          <span className="sm:hidden">Курс </span>
          <span className="text-gray-500 font-medium ml-1">на {lastUpdate}</span>
        </span>
      </div>

      {/* Окно для бегущей строки (flex-1 занимает все оставшееся место экрана) */}
      <div className="flex-1 overflow-hidden flex items-center h-full relative">
        
        {/* Маленький градиент слева, чтобы текст красиво выезжал, а не обрубался (по желанию) */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>

        {/* Сама анимация */}
        <div className="flex animate-marquee whitespace-nowrap items-center">
          <CurrencyData />
          <CurrencyData />
        </div>
      </div>

    </div>
  );
}