"use client";

import { useState, useEffect } from 'react';

interface BankData {
  name: string;
  rate: number;
  badge: string;
}

export default function Results() {
  const [bestBank, setBestBank] = useState<BankData | null>(null);
  const [otherBanks, setOtherBanks] = useState<BankData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://finprosto-backend.onrender.com/api/get_market_data")
      .then((res) => res.json())
      .then((response) => {
        if (response.status === "success" && response.data.banks.length > 0) {
          setBestBank(response.data.banks[0]);
          setOtherBanks(response.data.banks.slice(1));
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка загрузки данных рынка:", error);
        setIsLoading(false);
      });
  }, []);

  const getBankColor = (name: string) => {
    if (name.includes('Сбер')) return 'bg-green-500 text-white';
    if (name.includes('ВТБ')) return 'bg-blue-600 text-white';
    if (name.includes('Т-Банк')) return 'bg-yellow-400 text-black';
    return 'bg-gray-500 text-white';
  };

  return (
    <section className="px-8 py-16 lg:px-16 border-b border-border/50 bg-slate-50/30">
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-200/50 text-secondary text-[11px] font-bold uppercase tracking-wider mb-6">
          <svg className="w-3.5 h-3.5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
          Анализ завершен
        </div>
        <h2 className="text-4xl lg:text-[48px] font-bold leading-tight tracking-tight text-text">Мы уже сравнили рынок.</h2>
        <p className="mt-4 text-lg text-secondary leading-relaxed">
          Проанализировано 42 предложения от 18 банков. Мы отсеяли скрытые страховки и рекламные ставки.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* ================= ЛЕВАЯ КОЛОНКА (ПОБЕДИТЕЛЬ) ================= */}
        <div className="lg:col-span-7 bg-white rounded-[2rem] shadow-app border-2 border-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <div className="p-8 lg:p-10 relative z-10">
            <div className="flex items-center gap-2 mb-8">
              <div className="px-3 py-1 rounded-md bg-blue-50 border border-blue-100 flex items-center gap-2">
                <span className="text-lg">🏆</span>
                <span className="text-[11px] font-bold text-primary uppercase tracking-widest font-sans">Лучшее решение</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-lg font-bold shadow-sm">
                {bestBank ? bestBank.name.charAt(0) : "А"}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-text">{bestBank ? bestBank.name : "Альфа-Банк"}</h3>
                <p className="text-sm text-secondary mt-1">Кредит наличными без залога</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-10 pb-10 border-b border-border">
              <div><p className="text-sm font-medium text-secondary mb-2">Ежемесячный платеж</p><div className="text-4xl font-bold tracking-tight text-text">14 580 ₽</div></div>
              <div><p className="text-sm font-medium text-secondary mb-2">Честная переплата</p><div className="text-4xl font-bold tracking-tight text-emerald-500">34 800 ₽</div></div>
              
              <div>
                <p className="text-sm font-medium text-secondary mb-2">Ставка</p>
                {/* 🔥 ВОТ НОВЫЙ ДИЗАЙН СТАВКИ ПОБЕДИТЕЛЯ 🔥 */}
                <div className="text-3xl font-bold text-emerald-600 bg-emerald-50 inline-block px-3 py-1 rounded-lg">
                  {isLoading ? "..." : `${bestBank?.rate}%`}
                </div>
              </div>
              
              <div><p className="text-sm font-medium text-secondary mb-2">Срок</p><div className="text-2xl font-bold text-text">3 года</div></div>
            </div>

            <div className="mb-10">
              <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-5">Почему этот вариант?</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg></div><p className="text-[15px] text-text font-medium">Самая низкая переплата на рынке <span className="text-secondary font-normal">— сэкономите до 45 000 ₽.</span></p></div>
                <div className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg></div><p className="text-[15px] text-text font-medium">Одобрение без страховки <span className="text-secondary font-normal">— банк не навязывает дополнительные услуги.</span></p></div>
              </div>
            </div>
            <button className="w-full h-16 bg-primary hover:bg-blue-700 text-white rounded-xl text-[17px] font-medium transition-all shadow-md flex items-center justify-center gap-2">Оформить решение</button>
          </div>
        </div>

        {/* ================= ПРАВАЯ КОЛОНКА (СРАВНЕНИЕ БАНКОВ) ================= */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full">
          <h4 className="text-lg font-bold text-text mb-6">Остальные предложения</h4>
          
          <div className="flex flex-col gap-4">
            {isLoading ? (
              <div className="text-secondary text-sm animate-pulse">Собираем данные с сайтов банков... Это займет около 5-10 секунд.</div>
            ) : (
              otherBanks.map((bank, index) => (
                <div key={index} className="bg-white rounded-2xl border border-border p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${getBankColor(bank.name)}`}>
                        {bank.name.charAt(0)}
                      </div>
                      <span className="font-bold text-text">{bank.name}</span>
                    </div>
                    <div className="px-2 py-1 rounded bg-slate-100 text-secondary text-[11px] font-bold border border-border/50">
                      {bank.badge}
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[11px] text-secondary mb-1">Платеж</p>
                      <p className="text-lg font-bold tracking-tight text-text">~ 15 500 ₽</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-secondary mb-1">Ставка</p>
                      {/* 🔥 ВОТ НОВЫЙ ДИЗАЙН СТАВКИ ДЛЯ ДРУГИХ БАНКОВ 🔥 */}
                      <p className="text-xl font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">{bank.rate}%</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}