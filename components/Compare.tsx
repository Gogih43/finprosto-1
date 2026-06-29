"use client";

import { useState } from 'react';

export default function Compare() {
  // Состояние переключателя: false = Физлицо, true = Бизнес
  const [isBusiness, setIsBusiness] = useState(true);

  // Данные для правой карточки (Лизинг), которые меняются в зависимости от переключателя
  const leasingData = isBusiness ? {
    badge: "Выгодно для ИП/ООО",
    badgeColor: "bg-blue-100 text-primary",
    desc: "Аренда с правом выкупа. Машина на балансе.",
    discount: "- 250 000 ₽",
    taxes: "- 1 156 000 ₽",
    taxesLabel: "Возврат НДС и налогов",
    total: "2 314 000 ₽",
    totalColor: "text-primary",
    barWidth: "60%"
  } : {
    badge: "Невыгодно",
    badgeColor: "bg-red-100 text-red-600",
    desc: "Для физлиц нет налоговых вычетов. Переплата выше.",
    discount: "—",
    taxes: "—",
    taxesLabel: "Возврат НДС и налогов",
    total: "4 220 000 ₽",
    totalColor: "text-red-500",
    barWidth: "90%" // Бар будет почти полным, показывая, что это дорого
  };

  return (
    <section className="px-8 py-16 lg:px-16 border-b border-border/50 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div className="max-w-xl">
          <h2 className="text-4xl lg:text-[48px] font-bold leading-tight tracking-tight text-text">
            Что выгоднее: автокредит или лизинг?
          </h2>
          <p className="mt-4 text-lg text-secondary leading-relaxed">
            Считаем реальные деньги на примере авто за 3 000 000 ₽.
          </p>
        </div>
        
        {/* ИНТЕРАКТИВНЫЙ ПЕРЕКЛЮЧАТЕЛЬ */}
        <div className="flex items-center bg-slate-200/60 p-1 rounded-xl shrink-0 relative">
          {/* Ползунок (Фон, который ездит) */}
          <div 
            className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-lg shadow-sm ring-1 ring-black/5 transition-all duration-300 ease-out ${
              isBusiness ? 'translate-x-full' : 'translate-x-0'
            }`}
          ></div>
          
          <button 
            onClick={() => setIsBusiness(false)}
            className={`w-1/2 px-6 py-2.5 rounded-lg text-sm font-bold relative z-10 transition-colors duration-300 ${
              !isBusiness ? 'text-text' : 'text-secondary hover:text-text'
            }`}
          >
            Для физлица
          </button>
          <button 
            onClick={() => setIsBusiness(true)}
            className={`w-1/2 px-6 py-2.5 rounded-lg text-sm font-bold relative z-10 transition-colors duration-300 ${
              isBusiness ? 'text-text' : 'text-secondary hover:text-text'
            }`}
          >
            Для бизнеса (ИП / ООО)
          </button>
        </div>
      </div>

      <div className="relative bg-white rounded-[2rem] shadow-app border border-border overflow-hidden">
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-border rounded-full items-center justify-center text-xs font-bold text-secondary shadow-sm z-20">VS</div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
          
          {/* ЛЕВАЯ ЧАСТЬ: АВТОКРЕДИТ (Статичная) */}
          <div className="p-8 lg:p-12 bg-slate-50/50">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-text mb-2">Автокредит</h3>
              <p className="text-sm text-secondary">Классический кредит наличными.</p>
            </div>
            <div className="space-y-4 mb-10 font-mono text-sm">
              <div className="flex justify-between items-end pb-3 border-b border-border/60"><span className="text-secondary font-sans">Стоимость авто</span><span className="text-text font-medium">3 000 000 ₽</span></div>
              <div className="flex justify-between items-end pb-3 border-b border-border/60"><span className="text-secondary font-sans">Скидка от салона</span><span className="text-secondary">—</span></div>
              <div className="flex justify-between items-end pb-3 border-b border-border/60"><span className="text-secondary font-sans">Переплата банку</span><span className="text-red-500 font-medium">+ 850 000 ₽</span></div>
              <div className="flex justify-between items-end pb-3 border-b border-border/60"><span className="text-secondary font-sans">Возврат налогов</span><span className="text-secondary">—</span></div>
            </div>
            <div className="mt-8">
              <p className="text-[11px] font-bold text-secondary uppercase tracking-widest mb-3 font-sans">Итоговые расходы</p>
              <div className="flex items-end justify-between mb-2"><span className="text-3xl font-mono font-bold text-text">3 850 000 ₽</span></div>
              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex"><div className="h-full bg-slate-400 w-[78%]"></div><div className="h-full bg-red-400 w-[22%]"></div></div>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: ЛИЗИНГ (Динамическая) */}
          <div className="p-8 lg:p-12 relative overflow-hidden transition-colors duration-500">
            {/* Меняем фон в зависимости от выгоды */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isBusiness ? 'bg-gradient-to-br from-blue-50/50 to-transparent' : 'bg-gradient-to-br from-red-50/50 to-transparent'}`}></div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className={`text-2xl font-bold transition-colors duration-300 ${isBusiness ? 'text-primary' : 'text-red-500'}`}>Лизинг</h3>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${leasingData.badgeColor}`}>
                    {leasingData.badge}
                  </span>
                </div>
                <p className="text-sm text-secondary h-5">{leasingData.desc}</p>
              </div>
              
              <div className="space-y-4 mb-10 font-mono text-sm">
                <div className="flex justify-between items-end pb-3 border-b border-border/60">
                  <span className="text-secondary font-sans">Стоимость авто</span>
                  <span className="text-text font-medium">3 000 000 ₽</span>
                </div>
                <div className="flex justify-between items-end pb-3 border-b border-border/60">
                  <span className="text-secondary font-sans">Корпоративная скидка</span>
                  <span className={`font-medium transition-colors duration-300 ${isBusiness ? 'text-success' : 'text-secondary'}`}>{leasingData.discount}</span>
                </div>
                <div className="flex justify-between items-end pb-3 border-b border-border/60">
                  <span className="text-secondary font-sans">Переплата лизинговой</span>
                  <span className="text-red-500 font-medium">{isBusiness ? '+ 720 000 ₽' : '+ 1 220 000 ₽'}</span>
                </div>
                <div className="flex justify-between items-end pb-3 border-b border-border/60">
                  <span className="text-secondary font-sans">{leasingData.taxesLabel}</span>
                  <span className={`font-bold transition-colors duration-300 ${isBusiness ? 'text-success' : 'text-secondary'}`}>{leasingData.taxes}</span>
                </div>
              </div>
              
              <div className="mt-8">
                <p className={`text-[11px] font-bold uppercase tracking-widest mb-3 font-sans transition-colors duration-300 ${isBusiness ? 'text-primary' : 'text-red-500'}`}>
                  Итоговые расходы
                </p>
                <div className="flex items-end justify-between mb-2">
                  <span className={`text-3xl font-mono font-bold transition-colors duration-300 ${leasingData.totalColor}`}>{leasingData.total}</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full flex items-center relative overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-700 ease-out ${isBusiness ? 'bg-primary' : 'bg-red-400'}`} 
                    style={{ width: leasingData.barWidth }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* БЛОК ВЫВОДА (Меняется вердикт алгоритма) */}
        <div className="bg-slate-900 text-white p-6 lg:px-12 lg:py-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              {isBusiness ? (
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              ) : (
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              )}
            </div>
            <div>
              <p className="text-sm text-slate-400 font-medium mb-1">Финальный вердикт алгоритма</p>
              {isBusiness ? (
                <p className="text-lg font-medium">Для бизнеса лизинг выгоднее на <span className="font-mono font-bold text-emerald-400">1 536 000 ₽</span></p>
              ) : (
                <p className="text-lg font-medium">Для физлица выгоднее автокредит на <span className="font-mono font-bold text-emerald-400">370 000 ₽</span></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}