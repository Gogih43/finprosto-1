export default function Articles() {
  return (
    <section className="px-8 py-16 lg:px-16 lg:py-24">
      <div className="flex items-end justify-between mb-12">
        <div className="max-w-2xl"><h2 className="text-4xl lg:text-[48px] font-bold leading-tight tracking-tight text-text">База знаний</h2><p className="mt-4 text-lg text-secondary leading-relaxed">Помогаем разобраться в сложных терминах. Без воды.</p></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a href="#" className="group block">
          <div className="w-full h-48 rounded-2xl mb-5 overflow-hidden relative border border-border bg-blue-50/50">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl transition-transform group-hover:scale-110"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
          <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-2">Аналитика</p>
          <h3 className="text-lg font-bold text-text mb-3 leading-snug group-hover:text-primary transition-colors">Кредит или лизинг: что выгоднее?</h3>
          <p className="text-[12px] text-secondary font-mono bg-slate-100 inline-block px-2 py-1 rounded">Читать 4 мин.</p>
        </a>
        <a href="#" className="group block">
          <div className="w-full h-48 rounded-2xl mb-5 overflow-hidden relative border border-border bg-slate-50 flex items-center justify-center">
            <div className="absolute w-full h-full opacity-50" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
          </div>
          <p className="text-[11px] font-bold text-secondary uppercase tracking-widest mb-2">Инструкция</p>
          <h3 className="text-lg font-bold text-text mb-3 leading-snug group-hover:text-primary transition-colors">Как банки считают ваш доход: ПДН</h3>
          <p className="text-[12px] text-secondary font-mono bg-slate-100 inline-block px-2 py-1 rounded">Читать 6 мин.</p>
        </a>
        <a href="#" className="group block">
          <div className="w-full h-48 rounded-2xl mb-5 overflow-hidden relative border border-border bg-emerald-50/30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-400/20 rounded-full blur-3xl transition-transform group-hover:scale-125"></div>
          </div>
          <p className="text-[11px] font-bold text-success uppercase tracking-widest mb-2">Лайфхак</p>
          <h3 className="text-lg font-bold text-text mb-3 leading-snug group-hover:text-primary transition-colors">Как уменьшить переплату</h3>
          <p className="text-[12px] text-secondary font-mono bg-slate-100 inline-block px-2 py-1 rounded">Читать 3 мин.</p>
        </a>
        <a href="#" className="group block">
          <div className="w-full h-48 rounded-2xl mb-5 overflow-hidden relative border border-border bg-orange-50/30">
            <div className="absolute -bottom-8 right-0 w-40 h-40 bg-orange-400/20 rounded-full blur-2xl transition-transform group-hover:-translate-y-4"></div>
          </div>
          <p className="text-[11px] font-bold text-secondary uppercase tracking-widest mb-2">Разбор</p>
          <h3 className="text-lg font-bold text-text mb-3 leading-snug group-hover:text-primary transition-colors">Стоит ли делать рефинансирование?</h3>
          <p className="text-[12px] text-secondary font-mono bg-slate-100 inline-block px-2 py-1 rounded">Читать 5 мин.</p>
        </a>
      </div>
    </section>
  );
}