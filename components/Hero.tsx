"use client";

import { useState, useEffect } from 'react';

export default function Hero() {
  const [cbrRate, setCbrRate] = useState<string>("...");
  const [bestBankName, setBestBankName] = useState<string>("Загрузка...");
  const [bestBankRate, setBestBankRate] = useState<string>("...");

  useEffect(() => {
    fetch("https://finprosto-backend.onrender.com/api/get_cbr_rate")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") setCbrRate(data.cbr_rate + "%");
        else setCbrRate("Ошибка");
      })
      .catch(() => setCbrRate("Нет связи"));

    fetch("https://finprosto-backend.onrender.com/api/get_best_offer")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setBestBankRate(data.real_rate + "%");
          setBestBankName(data.bank_name); // 🔥 Сохраняем имя настоящего победителя
        } else {
          setBestBankRate("Ошибка");
          setBestBankName("Ошибка");
        }
      })
      .catch(() => {
        setBestBankRate("Нет связи");
        setBestBankName("Ошибка");
      });
  }, []);

  // Умный цвет для кружка банка
  const getBankColor = (name: string) => {
    if (name.includes('Сбер')) return 'bg-green-500 text-white';
    if (name.includes('ВТБ')) return 'bg-blue-600 text-white';
    if (name.includes('Т-Банк')) return 'bg-yellow-400 text-black';
    return 'bg-red-500 text-white'; // Альфа по умолчанию
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 px-8 py-12 lg:p-16 relative border-b border-border/50">
      
      {/* ЛЕВАЯ ЧАСТЬ */}
      <div className="lg:col-span-6 z-10 flex flex-col justify-center">
        <div className="flex gap-4 mb-6">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primaryLight text-primary text-[11px] font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            Финансовый помощник
          </div>
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-secondary border border-border text-[11px] font-bold uppercase tracking-wider shadow-sm">
            Ставка ЦБ РФ: <span className="text-text font-bold ml-2 text-sm">{cbrRate}</span>
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
            <input type="text" placeholder="500 000 ₽" className="w-full h-14 px-5 bg-transparent border border-border rounded-xl font-bold text-text placeholder-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
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
                {/* 🔥 ИМЯ И ЛОГОТИП ТЕПЕРЬ ДИНАМИЧЕСКИЕ 🔥 */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold shadow-sm ${getBankColor(bestBankName)}`}>
                  {bestBankName !== "Загрузка..." && bestBankName !== "Ошибка" ? bestBankName.charAt(0) : "Б"}
                </div>
                {bestBankName}
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
                  <span className="text-[10px] font-bold text-text">A+</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-6xl font-bold text-primary tracking-tighter">96</span><span className="text-sm font-medium text-secondary">баллов из 100</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-primary w-[96%] rounded-full relative"></div></div>
          </div>
          
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex justify-between items-end pb-4 border-b border-border/50">
              <span className="text-sm text-secondary">Реальная ставка</span>
              <span className="text-xl font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md transition-all">{bestBankRate}</span>
            </div>
            <div className="flex justify-between items-end pb-4 border-b border-border/50">
              <span className="text-sm text-secondary">Экономия</span>
              <span className="text-lg font-bold tracking-tight text-emerald-500">34 800 ₽</span>
            </div>
            <div className="flex justify-between items-end pb-2">
              <span className="text-sm text-secondary">Одобрение</span>
              <span className="text-lg font-bold text-text">92%</span>
            </div>
          </div>
          
          <div className="bg-background rounded-xl p-4 border border-border/50">
            <p className="text-[11px] text-secondary leading-relaxed">Мы сравнили предложения банков и показываем ориентировочные условия для большинства клиентов, а не рекламные ставки "от ...".</p>
          </div>
        </div>
      </div>
    </section>
  );
}