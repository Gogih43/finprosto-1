'use client';
import { useState, useEffect } from 'react';

type Currency = {
  Value: number;
};

export default function CurrencyWidget() {
  const [rates, setRates] = useState<{ USD?: Currency; EUR?: Currency; CNY?: Currency }>({});
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
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return null;

  // Имитация банковского спреда (наценки кассы)
  // Покупка (банк берет у вас дешевле на 2.5 руб)
  // Продажа (банк продает вам дороже на 3.5 руб)
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
    buy: (rates.CNY.Value - 0.3).toFixed(2), // У юаня спред меньше
    sell: (rates.CNY.Value + 0.5).toFixed(2),
    cbr: rates.CNY.Value.toFixed(2) 
  } : null;

  return (
    <div className="bg-gray-900 border-b border-gray-800 py-4">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white font-bold text-lg">
            💱 Обмен валют <span className="text-gray-400 text-sm font-normal ml-2">(Средний курс в кассах банков)</span>
          </div>

          <div className="flex gap-4 md:gap-8 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
            
            {/* ТАБЛИЦА */}
            <table className="w-full text-sm text-left text-gray-300 min-w-[300px]">
              <thead className="text-xs text-gray-500 uppercase bg-gray-800/50">
                <tr>
                  <th className="px-4 py-2 rounded-tl-lg">Валюта</th>
                  <th className="px-4 py-2">ЦБ РФ</th>
                  <th className="px-4 py-2 text-green-400">Покупка</th>
                  <th className="px-4 py-2 text-red-400 rounded-tr-lg">Продажа</th>
                </tr>
              </thead>
              <tbody>
                {usd && (
                  <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                    <td className="px-4 py-2 font-bold text-white">🇺🇸 USD</td>
                    <td className="px-4 py-2">{usd.cbr}</td>
                    <td className="px-4 py-2 font-bold text-green-400">{usd.buy} ₽</td>
                    <td className="px-4 py-2 font-bold text-red-400">{usd.sell} ₽</td>
                  </tr>
                )}
                {eur && (
                  <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                    <td className="px-4 py-2 font-bold text-white">🇪🇺 EUR</td>
                    <td className="px-4 py-2">{eur.cbr}</td>
                    <td className="px-4 py-2 font-bold text-green-400">{eur.buy} ₽</td>
                    <td className="px-4 py-2 font-bold text-red-400">{eur.sell} ₽</td>
                  </tr>
                )}
                {cny && (
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-4 py-2 font-bold text-white text-nowrap">🇨🇳 CNY</td>
                    <td className="px-4 py-2">{cny.cbr}</td>
                    <td className="px-4 py-2 font-bold text-green-400">{cny.buy} ₽</td>
                    <td className="px-4 py-2 font-bold text-red-400">{cny.sell} ₽</td>
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