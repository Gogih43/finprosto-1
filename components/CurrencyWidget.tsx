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
        setLastUpdate(updateDate.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' }));
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

  return (
    <div className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Контейнер с горизонтальной прокруткой (для мобилок прячем ползунок) */}
        <div className="flex items-center overflow-x-auto py-2.5 gap-6 whitespace-nowrap" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {/* Индикатор LIVE */}
          <div className="flex items-center gap-2 shrink-0 border-r border-gray-700 pr-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">
              Средний курс в банках на {lastUpdate}
            </span>
          </div>

          {/* USD */}
          {usd && (
            <div className="flex items-center gap-3 shrink-0 border-r border-gray-800 pr-6">
              <div className="text-white font-bold text-sm flex items-center gap-1.5">
                <span>🇺🇸</span> USD
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="text-gray-500" title="Официальный курс ЦБ РФ">ЦБ: {usd.cbr}</span>
                <span className="text-gray-600">|</span>
                <span className="text-green-400" title="Средний курс покупки в кассах">Покупка {usd.buy}</span>
                <span className="text-gray-600">|</span>
                <span className="text-red-400" title="Средний курс продажи в кассах">Продажа {usd.sell}</span>
              </div>
            </div>
          )}

          {/* EUR */}
          {eur && (
            <div className="flex items-center gap-3 shrink-0 border-r border-gray-800 pr-6">
              <div className="text-white font-bold text-sm flex items-center gap-1.5">
                <span>🇪🇺</span> EUR
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="text-gray-500">ЦБ: {eur.cbr}</span>
                <span className="text-gray-600">|</span>
                <span className="text-green-400">Покупка {eur.buy}</span>
                <span className="text-gray-600">|</span>
                <span className="text-red-400">Продажа {eur.sell}</span>
              </div>
            </div>
          )}

          {/* CNY */}
          {cny && (
            <div className="flex items-center gap-3 shrink-0">
              <div className="text-white font-bold text-sm flex items-center gap-1.5">
                <span>🇨🇳</span> CNY
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="text-gray-500">ЦБ: {cny.cbr}</span>
                <span className="text-gray-600">|</span>
                <span className="text-green-400">Покупка {cny.buy}</span>
                <span className="text-gray-600">|</span>
                <span className="text-red-400">Продажа {cny.sell}</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}