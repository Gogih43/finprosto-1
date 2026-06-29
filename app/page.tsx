export default function Home() {
  return (
    <>
      {/* ==================== HEADER ==================== */}
      <header className="w-full flex items-center justify-between px-8 py-5 border-b border-border bg-white z-50 sticky top-0">
        <div className="text-2xl font-bold tracking-tight text-text uppercase">
          <span className="text-primary">FIN</span>ПРОСТО
        </div>
        <nav className="hidden md:flex gap-8 text-[15px] font-medium text-secondary">
          <a href="#" className="hover:text-text transition-colors">Кредиты</a>
          <a href="#" className="hover:text-text transition-colors">Авто</a>
          <a href="#" className="hover:text-text transition-colors">Ипотека</a>
          <a href="#" className="hover:text-text transition-colors">Лизинг</a>
          <a href="#" className="hover:text-text transition-colors">Долги</a>
          <a href="#" className="hover:text-text transition-colors">Статьи</a>
        </nav>
        <div className="hidden md:flex items-center justify-center px-6 py-2.5 bg-background border border-border text-text font-medium rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
          Войти
        </div>
      </header>

      <main>
        {/* ==================== ЭКРАН 1: HERO ==================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 px-8 py-12 lg:p-16 relative border-b border-border/50">
          <div className="lg:col-span-6 z-10 flex flex-col justify-center">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primaryLight text-primary text-[11px] font-bold uppercase tracking-wider mb-6 self-start">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              финансовый помощник
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
                <div className="flex justify-between items-end pb-4 border-b border-border/50"><span className="text-sm text-secondary">Реальная ставка</span><span className="text-lg font-mono font-medium text-text">11.4%</span></div>
                <div className="flex justify-between items-end pb-4 border-b border-border/50"><span className="text-sm text-secondary">Экономия</span><span className="text-lg font-mono font-bold text-success">34 800 ₽</span></div>
                <div className="flex justify-between items-end pb-2"><span className="text-sm text-secondary">Одобрение</span><span className="text-lg font-mono font-medium text-text">92%</span></div>
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

        {/* ==================== ЭКРАН 2: РЕЗУЛЬТАТЫ ==================== */}
        <section className="px-8 py-16 lg:px-16 border-b border-border/50 bg-slate-50/30">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-200/50 text-secondary text-[11px] font-bold uppercase tracking-wider mb-6">
              <svg className="w-3.5 h-3.5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
              Анализ завершен
            </div>
            <h2 className="text-4xl lg:text-[48px] font-bold leading-tight tracking-tight text-text">Мы уже сравнили рынок.</h2>
            <p className="mt-4 text-lg text-secondary leading-relaxed">Проанализировано 42 предложения от 18 банков. Мы отсеяли скрытые страховки и рекламные ставки.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 bg-white rounded-[2rem] shadow-app border-2 border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              <div className="p-8 lg:p-10 relative z-10">
                <div className="flex items-center gap-2 mb-8"><div className="px-3 py-1 rounded-md bg-blue-50 border border-blue-100 flex items-center gap-2"><span className="text-lg">🏆</span><span className="text-[11px] font-bold text-primary uppercase tracking-widest font-sans">Лучшее решение</span></div></div>
                <div className="flex items-center gap-4 mb-10"><div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-lg font-bold shadow-sm">А</div><div><h3 className="text-3xl font-bold text-text">Альфа-Банк</h3><p className="text-sm text-secondary mt-1">Кредит наличными без залога</p></div></div>
                <div className="grid grid-cols-2 gap-8 mb-10 pb-10 border-b border-border">
                  <div><p className="text-sm font-medium text-secondary mb-2">Ежемесячный платеж</p><div className="text-4xl font-mono font-bold text-text">14 580 ₽</div></div>
                  <div><p className="text-sm font-medium text-secondary mb-2">Честная переплата</p><div className="text-4xl font-mono font-bold text-success">34 800 ₽</div></div>
                  <div><p className="text-sm font-medium text-secondary mb-2">Ставка</p><div className="text-2xl font-mono font-medium text-text">11.4%</div></div>
                  <div><p className="text-sm font-medium text-secondary mb-2">Срок</p><div className="text-2xl font-mono font-medium text-text">3 года</div></div>
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
            <div className="lg:col-span-5 flex flex-col justify-center h-full">
              <h4 className="text-lg font-bold text-text mb-6">Остальные предложения</h4>
              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-2xl border border-border p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">С</div><span className="font-bold text-text">СберБанк</span></div><div className="px-2 py-1 rounded bg-slate-100 text-secondary text-[11px] font-bold font-mono border border-border/50">+ 21 000 ₽ переплаты</div></div>
                  <div className="flex items-end justify-between"><div><p className="text-[11px] text-secondary mb-1">Платеж</p><p className="text-lg font-mono font-medium text-text">15 150 ₽</p></div><div className="text-right"><p className="text-[11px] text-secondary mb-1">Ставка</p><p className="text-lg font-mono font-medium text-text">12.9%</p></div></div>
                </div>
                <div className="bg-white rounded-2xl border border-border p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4"><div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">В</div><span className="font-bold text-text">ВТБ</span></div><div className="px-2 py-1 rounded bg-slate-100 text-secondary text-[11px] font-bold font-sans border border-border/50">Обязательная страховка</div></div>
                  <div className="flex items-end justify-between"><div><p className="text-[11px] text-secondary mb-1">Платеж</p><p className="text-lg font-mono font-medium text-text">14 900 ₽</p></div><div className="text-right"><p className="text-[11px] text-secondary mb-1">Ставка</p><p className="text-lg font-mono font-medium text-text">12.5%</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ЭКРАН 3: КРЕДИТ VS ЛИЗИНГ ==================== */}
        <section className="px-8 py-16 lg:px-16 border-b border-border/50">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-xl"><h2 className="text-4xl lg:text-[48px] font-bold leading-tight tracking-tight text-text">Что выгоднее: автокредит или лизинг?</h2><p className="mt-4 text-lg text-secondary leading-relaxed">Считаем реальные деньги на примере авто за 3 000 000 ₽.</p></div>
            <div className="flex items-center bg-slate-200/60 p-1 rounded-xl shrink-0"><button className="px-6 py-2.5 rounded-lg text-sm font-medium text-secondary">Для физлица</button><button className="px-6 py-2.5 rounded-lg bg-white text-text text-sm font-bold shadow-sm ring-1 ring-black/5">Для бизнеса (ИП / ООО)</button></div>
          </div>
          <div className="relative bg-white rounded-[2rem] shadow-app border border-border overflow-hidden">
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-border rounded-full items-center justify-center text-xs font-bold text-secondary shadow-sm z-20">VS</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
              <div className="p-8 lg:p-12 bg-slate-50/50">
                <div className="mb-8"><h3 className="text-2xl font-bold text-text mb-2">Автокредит</h3><p className="text-sm text-secondary">Классический кредит наличными.</p></div>
                <div className="space-y-4 mb-10 font-mono text-sm">
                  <div className="flex justify-between items-end pb-3 border-b border-border/60"><span className="text-secondary font-sans">Стоимость авто</span><span className="text-text font-medium">3 000 000 ₽</span></div>
                  <div className="flex justify-between items-end pb-3 border-b border-border/60"><span className="text-secondary font-sans">Переплата банку</span><span className="text-red-500 font-medium">+ 850 000 ₽</span></div>
                </div>
                <div className="mt-8">
                  <p className="text-[11px] font-bold text-secondary uppercase tracking-widest mb-3 font-sans">Итоговые расходы</p>
                  <div className="flex items-end justify-between mb-2"><span className="text-3xl font-mono font-bold text-text">3 850 000 ₽</span></div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex"><div className="h-full bg-slate-400 w-[78%]"></div><div className="h-full bg-red-400 w-[22%]"></div></div>
                </div>
              </div>
              <div className="p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="mb-8"><div className="flex items-center gap-3 mb-2"><h3 className="text-2xl font-bold text-primary">Лизинг</h3><span className="px-2 py-0.5 rounded bg-blue-100 text-primary text-[10px] font-bold uppercase tracking-wider">Выгодно для ИП/ООО</span></div><p className="text-sm text-secondary">Аренда с правом выкупа. Машина на балансе.</p></div>
                  <div className="space-y-4 mb-10 font-mono text-sm">
                    <div className="flex justify-between items-end pb-3 border-b border-border/60"><span className="text-secondary font-sans">Стоимость авто</span><span className="text-text font-medium">3 000 000 ₽</span></div>
                    <div className="flex justify-between items-end pb-3 border-b border-border/60"><span className="text-secondary font-sans">Возврат НДС и налогов</span><span className="text-success font-bold">- 1 156 000 ₽</span></div>
                  </div>
                  <div className="mt-8">
                    <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-3 font-sans">Итоговые расходы (с вычетами)</p>
                    <div className="flex items-end justify-between mb-2"><span className="text-3xl font-mono font-bold text-primary">2 314 000 ₽</span></div>
                    <div className="w-full h-3 bg-slate-100 rounded-full flex items-center relative">
                      <div className="h-full bg-primary rounded-full absolute left-0" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 text-white p-6 lg:px-12 lg:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                <div><p className="text-sm text-slate-400 font-medium mb-1">Финальный вердикт алгоритма</p><p className="text-lg font-medium">Для бизнеса лизинг выгоднее на <span className="font-mono font-bold text-emerald-400">1 536 000 ₽</span></p></div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ЭКРАН 4: ЧТО ЕСЛИ ==================== */}
        <section className="px-8 py-16 lg:px-16 border-b border-border/50 bg-slate-50/30">
          <div className="max-w-2xl mb-12">
            <h2 className="text-4xl lg:text-[48px] font-bold leading-tight tracking-tight text-text">А что, если изменить тактику?</h2>
            <p className="mt-4 text-lg text-secondary leading-relaxed">Посмотрите, как досрочные платежи или рефинансирование влияют на ваш долг.</p>
          </div>
          <div className="bg-white rounded-[2rem] shadow-app border border-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
            <div className="lg:col-span-5 p-8 lg:p-10 bg-slate-50/50 flex flex-col gap-4">
              <p className="text-[11px] font-bold text-secondary uppercase tracking-widest mb-2">Выберите сценарий</p>
              <div className="group flex items-center justify-between p-5 rounded-2xl border-2 border-primary bg-primaryLight/30 cursor-pointer relative shadow-sm">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-primary rounded-r-full"></div>
                <div className="pl-2"><h4 className="font-bold text-text mb-1">Платить на 15 000 ₽ больше</h4><p className="text-xs text-secondary">Ежемесячное досрочное погашение</p></div>
                <div className="w-12 h-7 bg-primary rounded-full relative shadow-inner"><div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full"></div></div>
              </div>
            </div>
            <div className="lg:col-span-7 p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
                <div><p className="text-sm font-medium text-secondary mb-2">Сэкономленные деньги</p><div className="text-5xl font-mono font-bold text-success tracking-tighter">+ 412 000 ₽</div></div>
                <div><p className="text-sm font-medium text-secondary mb-2">Новый срок кредита</p><div className="text-3xl font-mono font-bold text-text">1 г. 8 мес.</div></div>
              </div>
              <div className="relative w-full h-48 mt-auto z-10 border-b-2 border-l-2 border-border/50">
                <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="saving" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#16A34A" stopOpacity="0.15"/>
                      <stop offset="100%" stopColor="#16A34A" stopOpacity="0"/>
                    </linearGradient>
                    <pattern id="diagonal-stripe" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="8" stroke="#16A34A" strokeWidth="1.5" strokeOpacity="0.3"/>
                    </pattern>
                  </defs>
                  <path d="M 0 0 Q 250 20 500 200" fill="none" stroke="#667085" strokeWidth="2" strokeDasharray="6 6" />
                  <path d="M 0 0 Q 250 20 500 200 L 280 200 Q 150 50 0 0 Z" fill="url(#diagonal-stripe)" />
                  <path d="M 0 0 Q 150 50 280 200" fill="none" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 0 0 Q 150 50 280 200 L 0 200 Z" fill="url(#saving)" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ЭКРАН 5: ДОЛГИ ==================== */}
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

        {/* ==================== ЭКРАН 6: СТАТЬИ ==================== */}
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
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="w-full px-8 py-12 lg:px-16 border-t border-border bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          <div className="lg:col-span-4 pr-4">
            <div className="text-2xl font-bold tracking-tight text-text uppercase mb-4">
              <span className="text-primary">FIN</span>ПРОСТО
            </div>
            <p className="text-sm text-secondary leading-relaxed mb-6">
              Независимый финансовый помощник. Переводим банковский язык на человеческий.
            </p>
          </div>
          <div className="lg:col-span-2 lg:col-start-6">
            <p className="text-sm font-bold text-text mb-4">Услуги</p>
            <ul className="space-y-3">
              <li><a href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Кредит наличными</a></li>
              <li><a href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Автокредит</a></li>
              <li><a href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Ипотека</a></li>
              <li><a href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Лизинг авто</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-sm font-bold text-text mb-4">Решения</p>
            <ul className="space-y-3">
              <li><a href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Рефинансирование</a></li>
              <li><a href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Реструктуризация</a></li>
              <li><a href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Списание долгов</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-sm font-bold text-text mb-4">Компания</p>
            <ul className="space-y-3">
              <li><a href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">База знаний</a></li>
              <li><a href="#" className="text-[13px] text-secondary hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-secondary leading-relaxed max-w-3xl">
            © 2026 FINПРОСТО. Не является публичной офертой. Проект не является банком и не выдает кредиты. Анализ рынка на основе открытых данных ЦБ РФ.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[11px] text-secondary hover:text-text transition-colors whitespace-nowrap">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </>
  );
}