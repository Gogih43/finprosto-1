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
        
        // Достаем точное время обновления курса от ЦБ
        const updateDate = new Date(data.Date);
        const formattedDate = updateDate.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
        setLastUpdate(formattedDate);
        
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return null;

  // Имитация банковского спреда (наценки кассы)
  const getBankRates = (cbrValue: number) => {
    return {
      buy: (cbrValue - 2.5).toFixed(2),
      sell: (cbrValue + 3.5).toFixed(2),
      cbr: cbrValue.toFixed(2)
    };
  };

  const usd = rates.USD ? getBankRates(rates.USD.Value) : null;
  const eur = rates.EUR ? getBankRates(rates.EUR.Value) : null;
  const cny = rates.CNY ? { 
    buy: (rates.CNY.Value - 0.3).toFixed(2), 
    sell: (rates.CNY.Value + 0.5).toFixed(2),
    cbr: rates.CNY.Value.toFixed(2) 
  } : null;

  return (
    <div className="bg-gray-900 border-b border-gray-800 py-5 shadow-inner">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* ЛЕВАЯ ЧАСТЬ: Заголовок и пульсирующий LIVE */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-white font-bold text-xl tracking-wide">Обмен валют</h2>
              {/* ПУЛЬСИРУЮЩИЙ МАЯЧОК LIVE */}
              <div className="flex items-center gap-1.5 bg-gray-800 px-2 py-0.5 rounded-md border border-gray-700">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-green-500 text-[10px] font-black tracking-widest">LIVE</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs font-medium">
              Средний курс в кассах банков на <span className="text-gray-300 font-bold">{lastUpdate}</span>
            </p>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Таблица с курсами */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
            <table className="w-full text-sm text-left text-gray-300 min-w-[340px]">
              <thead className="text-xs text-gray-500 uppercase bg-gray-800/80 border-b border-gray-700">
                <tr>
                  <th className="px-4 py-2.5 rounded-tl-xl font-bold">Валюта</th>
                  <th className="px-4 py-2.5 font-bold">ЦБ РФ</th>
                  <th className="px-4 py-2.5 text-green-400/80 font-bold">Покупка</th>
                  <th className="px-4 py-2.5 text-red-400/80 font-bold rounded-tr-xl">Продажа</th>
                </tr>
              </thead>
              <tbody className="bg-gray-800/30 divide-y divide-gray-800/50">
                {usd && (
                  <tr className="hover:bg-gray-800/80 transition-colors">
                    <td className="px-4 py-3 font-black text-white flex items-center gap-2">
                      <span className="text-lg">🇺🇸</span> USD
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-400">{usd.cbr}</td>
                    <td className="px-4 py-3 font-black text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.2)]">{usd.buy} ₽</td>
                    <td className="px-4 py-3 font-black text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.2)]">{usd.sell} ₽</td>
                  </tr>
                )}
                {eur && (
                  <tr className="hover:bg-gray-800/80 transition-colors">
                    <td className="px-4 py-3 font-black text-white flex items-center gap-2">
                      <span className="text-lg">🇪🇺</span> EUR
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-400">{eur.cbr}</td>
                    <td className="px-4 py-3 font-black text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.2)]">{eur.buy} ₽</td>
                    <td className="px-4 py-3 font-black text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.2)]">{eur.sell} ₽</td>
                  </tr>
                )}
                {cny && (
                  <tr className="hover:bg-gray-800/80 transition-colors">
                    <td className="px-4 py-3 font-black text-white flex items-center gap-2">
                      <span className="text-lg">🇨🇳</span> CNY
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-400">{cny.cbr}</td>
                    <td className="px-4 py-3 font-black text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.2)]">{cny.buy} ₽</td>
                    <td className="px-4 py-3 font-black text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.2)]">{cny.sell} ₽</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}