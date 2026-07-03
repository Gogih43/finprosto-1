"use client";

import { useState, useEffect } from 'react';

export default function Hero() {
  // Память для ставки ЦБ
  const [cbrRate, setCbrRate] = useState<string>("...");
  
  // Память для ставки Альфа-Банка (по умолчанию ставим "...", пока грузится)
  const [alfaRate, setAlfaRate] = useState<string>("...");

  // Этот код срабатывает при загрузке страницы
  useEffect(() => {
    // 1. Запрашиваем ставку ЦБ (🔥 ИЗМЕНЕНА ССЫЛКА 🔥)
    fetch("https://finprosto-backend.onrender.com/api/get_cbr_rate")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") setCbrRate(data.cbr_rate + "%");
        else setCbrRate("Ошибка");
      })
      .catch(() => setCbrRate("Нет связи"));

    // 2. Запрашиваем ставку Альфа-Банка (🔥 ИЗМЕНЕНА ССЫЛКА 🔥)
    fetch("https://finprosto-backend.onrender.com/api/get_best_offer")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") setAlfaRate(data.real_rate + "%");
        else setAlfaRate("Ошибка");
      })
      .catch(() => setAlfaRate("Нет связи"));
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 px-8 py-12 lg:p-16 relative border-b border-border/50">
      
      {/* ЛЕВАЯ ЧАСТЬ */}
      <div className="lg:col-span-6 z-10 flex flex-col justify-center">
        
        {/* Блок со ставкой ЦБ */}
        <div className="flex gap-4 mb-6">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primaryLight text-primary text-[11px] font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            Финансовый помощник
          </div>
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-secondary border border-border text-[11px] font-bold uppercase tracking-wider shadow-sm">
            Ставка ЦБ РФ: <span className="text-text font-mono ml-2 text-xs">{cbrRate}</span>
          </div>
        </div>

        <h1 className="text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight text-text">
          Понимать финансы должно быть так же просто, как купить билет в театр.
        </h1>
        <p className="mt-6 text-lg text-secondary leading-relaxed max-w-lg">
          Не рекламные ставки. Реальные условия. Анализируем сотни предложений, чтобы найти лучшее решение именно для вас.
        </p>

        <div className="mt-10 bg-white rounded-2xl shadow-soft border border-border p-6 max-w-[480px]">
          <div className="flex flex-col gap-4">
            <select className="w-full h-14 px-5 bg-transparent border border-border rounded-xl text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer">
              <option value="">Что хотите сделать?</option>
              <option value="credit">Взять кредит</option>
              <option value="refinance">Уменьшить платеж</option>
              <option value="leasing">Оформить лизинг</option>
            </select>
            <input type="text" placeholder="500 000 ₽" className="w-full h-14 px-5 bg-transparent border border-border rounded-xl font-mono text-text placeholder-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
            <input type="text" placeholder="3 года" className="w-full h-14 px-5 bg-transparent border border-border rounded-xl text-text placeholder-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
            <select className="w-full h-14 px-5 bg-transparent border border-border rounded-xl text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer">
              <option value="">Есть официальный доход</option>
              <option value="yes">Да, подтвержденный</option>
              <option value="no">Нет / неофициальный</option>
            </select>
            <button className="w-full h-14 mt-2 bg-primary hover:bg-blue-700 text-white rounded-xl text-[15px] font-medium transition-all shadow-md">
              Получить подбор
            </button>
          </div>
        </div>
      </div>

      {/* ПРАВАЯ ЧАСТЬ (Карточка Банка) */}
      <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end min-h-[500px]">
        <div className="absolute inset-0 opacity-40 pointer-events-none lg:-mr-16 lg:-my-16">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="grid1" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M 48 0 L 0 0 0 48" fill="none" stroke="#E5E7EB" strokeWidth="1"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid1)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        </div>

        <div className="relative z-10 w-full max-w-[420px] bg-white border border-border rounded-2xl shadow-float p-8 lg:mr-8">
          <div className="mb-6 flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-2">Лучшее предложение</p>
              <h3 className="text-2xl font-bold text-text flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-[13px] font-bold shadow-sm">А</div>
                Альфа-Банк
              </h3>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-green-50 border border-green-100/50">
                <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success"></span></span>
                <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider font-sans">Высокий шанс</span>
              </div>
              <div className="w-[85px] mt-2.5">
                <div className="flex gap-[3px] h-1.5">
                  <div className="flex-1 bg-success rounded-[2px]"></div><div className="flex-1 bg-success rounded-[2px]"></div><div className="flex-1 bg-success rounded-[2px]"></div><div className="flex-1 bg-success/40 rounded-[2px]"></div><div className="flex-1 bg-slate-200 rounded-[2px]"></div>
                </div>
                <div className="flex justify-between items-center mt-1.5">
                  <span className="text-[9px] font-bold text-secondary uppercase tracking-widest font-sans">Скоринг</span>
                  <span className="text-[10px] font-bold font-mono text-text">A+</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-6xl font-mono font-bold text-primary tracking-tighter">96</span><span className="text-sm font-medium text-secondary">баллов из 100</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-primary w-[96%] rounded-full relative"></div></div>
          </div>
          
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex justify-between items-end pb-4 border-b border-border/50">
              <span className="text-sm text-secondary">Реальная ставка</span>
              {/* ВОТ ЗДЕСЬ ТЕПЕРЬ ЖИВАЯ СТАВКА АЛЬФА-БАНКА! */}
              <span className="text-lg font-mono font-medium text-text bg-yellow-100 px-2 rounded transition-all">{alfaRate}</span>
            </div>
            <div className="flex justify-between items-end pb-4 border-b border-border/50">
              <span className="text-sm text-secondary">Экономия</span>
              <span className="text-lg font-mono font-bold text-success">34 800 ₽</span>
            </div>
            <div className="flex justify-between items-end pb-2">
              <span className="text-sm text-secondary">Одобрение</span>
              <span className="text-lg font-mono font-medium text-text">92%</span>
            </div>
          </div>
          
          <div className="bg-background rounded-xl p-4 border border-border/50">
            <p className="text-[11px] text-secondary leading-relaxed">Мы сравнили предложения банков и показываем ориентировочные условия для большинства клиентов, а не рекламные ставки "от ...".</p>
          </div>
          
          <div className="absolute z-20 -left-6 lg:-left-20 top-1/3 bg-white border border-border shadow-lg rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <div><p className="text-sm font-semibold text-text whitespace-nowrap">Без скрытых комиссий</p><p className="text-[11px] text-secondary mt-0.5">Честный расчет</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}