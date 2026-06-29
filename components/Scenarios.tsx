"use client";

import { useState } from 'react';

export default function Scenarios() {
  // Наше состояние: хранит номер активного сценария (по умолчанию 1 - средний)
  const [activeTab, setActiveTab] = useState(1);

  // База данных наших сценариев
  const scenariosData = [
    {
      id: 0,
      title: "Ставка уменьшится на 2%",
      subtitle: "Сделать рефинансирование",
      saved: "+ 215 000 ₽",
      newTerm: "2 г. 10 мес.",
      graphPath: "M 0 0 Q 200 40 350 200", // Плавное снижение
    },
    {
      id: 1,
      title: "Платить на 15 000 ₽ больше",
      subtitle: "Ежемесячное досрочное погашение",
      saved: "+ 412 000 ₽",
      newTerm: "1 г. 8 мес.",
      graphPath: "M 0 0 Q 150 50 280 200", // Резкое снижение
    },
    {
      id: 2,
      title: "Снизить платеж на 12 000 ₽",
      subtitle: "Увеличить срок на 2 года",
      saved: "- 185 000 ₽", // Переплата вырастет
      newTerm: "5 лет",
      graphPath: "M 0 0 Q 350 10 450 200", // Долгий график
    }
  ];

  const current = scenariosData[activeTab];

  return (
    <section className="px-8 py-16 lg:px-16 border-b border-border/50 bg-slate-50/30 transition-all">
      <div className="max-w-2xl mb-12">
        <h2 className="text-4xl lg:text-[48px] font-bold leading-tight tracking-tight text-text">
          А что, если изменить тактику?
        </h2>
        <p className="mt-4 text-lg text-secondary leading-relaxed">
          Посмотрите, как досрочные платежи или рефинансирование влияют на ваш долг.
        </p>
      </div>

      <div className="bg-white rounded-[2rem] shadow-app border border-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
        
        {/* ЛЕВАЯ ЧАСТЬ: ТУМБЛЕРЫ */}
        <div className="lg:col-span-5 p-8 lg:p-10 bg-slate-50/50 flex flex-col gap-4">
          <p className="text-[11px] font-bold text-secondary uppercase tracking-widest mb-2">Выберите сценарий</p>
          
          {scenariosData.map((scenario) => {
            const isActive = activeTab === scenario.id;
            
            return (
              <div 
                key={scenario.id}
                onClick={() => setActiveTab(scenario.id)}
                className={`group flex items-center justify-between p-5 rounded-2xl cursor-pointer relative shadow-sm transition-all duration-300 ${
                  isActive 
                    ? 'border-2 border-primary bg-primaryLight/30' 
                    : 'border border-border bg-white hover:border-gray-300'
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-primary rounded-r-full"></div>
                )}
                <div className="pl-2">
                  <h4 className={`font-bold mb-1 transition-colors ${isActive ? 'text-text' : 'text-text group-hover:text-primary'}`}>
                    {scenario.title}
                  </h4>
                  <p className="text-xs text-secondary">{scenario.subtitle}</p>
                </div>
                
                {/* Тумблер */}
                <div className={`w-12 h-7 rounded-full relative transition-colors duration-300 ${isActive ? 'bg-primary shadow-inner' : 'bg-slate-200'}`}>
                  <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-300 ${isActive ? 'right-1' : 'left-1'}`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ПРАВАЯ ЧАСТЬ: ДАШБОРД С РЕЗУЛЬТАТОМ */}
        <div className="lg:col-span-7 p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
            <div>
              <p className="text-sm font-medium text-secondary mb-2">
                {activeTab === 2 ? 'Потеряете на переплате' : 'Сэкономленные деньги'}
              </p>
              <div className={`text-5xl font-mono font-bold tracking-tighter transition-colors duration-500 ${activeTab === 2 ? 'text-red-500' : 'text-success'}`}>
                {current.saved}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-secondary mb-2">Новый срок кредита</p>
              <div className="text-3xl font-mono font-bold text-text transition-all duration-500">
                {current.newTerm}
              </div>
            </div>
          </div>

          <div className="relative w-full h-48 mt-auto z-10 border-b-2 border-l-2 border-border/50">
            <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="saving" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={activeTab === 2 ? "#EF4444" : "#16A34A"} stopOpacity="0.15"/>
                  <stop offset="100%" stopColor={activeTab === 2 ? "#EF4444" : "#16A34A"} stopOpacity="0"/>
                </linearGradient>
                <pattern id="diagonal-stripe" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="8" stroke={activeTab === 2 ? "#EF4444" : "#16A34A"} strokeWidth="1.5" strokeOpacity="0.3"/>
                </pattern>
              </defs>
              
              {/* Старый график (Базовый) */}
              <path d="M 0 0 Q 250 20 500 200" fill="none" stroke="#667085" strokeWidth="2" strokeDasharray="6 6" />
              
              {/* Заштрихованная область выгоды/потерь */}
              <path d={`M 0 0 Q 250 20 500 200 L ${activeTab === 2 ? '450' : current.graphPath.split(' ')[6]} 200 Q ${current.graphPath.split(' ')[4]} ${current.graphPath.split(' ')[5]} 0 0 Z`} fill="url(#diagonal-stripe)" className="transition-all duration-700" />
              
              {/* Новый интерактивный график */}
              <path d={current.graphPath} fill="none" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" className="transition-all duration-700" />
              <path d={`${current.graphPath} L 0 200 Z`} fill="url(#saving)" className="transition-all duration-700" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}