export default function Debts() {
  return (
    <section className="px-8 py-16 lg:px-16 border-b border-border/50">
      <div className="max-w-2xl mb-12 lg:mb-16">
        <h2 className="text-4xl lg:text-[48px] font-bold leading-tight tracking-tight text-text">Уже есть кредиты?</h2>
        <p className="mt-4 text-lg text-secondary leading-relaxed">Финансовые ситуации бывают разными. Без паники и штрафов. Выберите ваше текущее состояние.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div className="bg-white rounded-3xl p-8 border border-border shadow-soft flex flex-col">
          <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-6"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12 Q 8 4 12 12 T 21 12" /></svg></div>
          <div className="mb-8 flex-1"><h3 className="text-2xl font-bold text-text mb-3">Плачу вовремя, хочу условия лучше</h3><p className="text-[15px] text-secondary">Снизим процентную ставку или объединим кредиты.</p></div>
          <button className="w-full py-4 px-6 bg-primaryLight text-primary hover:bg-primary hover:text-white rounded-xl text-[15px] font-bold transition-colors">Рефинансирование</button>
        </div>
        <div className="bg-white rounded-3xl p-8 border border-border shadow-soft flex flex-col">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-6"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12 L 8 5 L 12 19 L 16 8 L 21 12" /></svg></div>
          <div className="mb-8 flex-1"><h3 className="text-2xl font-bold text-text mb-3">Платить стало тяжело, есть просрочки</h3><p className="text-[15px] text-secondary">Договоримся об отсрочке или изменении графика.</p></div>
          <button className="w-full py-4 px-6 bg-white border-2 border-border text-text hover:border-gray-400 rounded-xl text-[15px] font-bold transition-colors">Реструктуризация</button>
        </div>
        <div className="bg-slate-50/80 rounded-3xl p-8 border border-border shadow-soft flex flex-col">
          <div className="w-14 h-14 rounded-2xl bg-slate-200/50 border border-slate-300/50 flex items-center justify-center mb-6"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12 L 10 12 M 14 12 L 21 12 M 10 8 L 14 16" /></svg></div>
          <div className="mb-8 flex-1"><h3 className="text-2xl font-bold text-text mb-3">Долги растут, платить больше не могу</h3><p className="text-[15px] text-secondary">Законно спишем долги через арбитражный суд или МФЦ.</p></div>
          <button className="w-full py-4 px-6 bg-slate-800 text-white hover:bg-slate-700 rounded-xl text-[15px] font-bold transition-colors">Законное списание</button>
        </div>
      </div>
    </section>
  );
}