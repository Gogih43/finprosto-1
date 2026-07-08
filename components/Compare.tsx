'use client';

export default function Compare() {
  return (
    <section className="py-20 bg-white" id="compare">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-4 inline-block">
            Для бизнеса и ИП
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Кредит или Лизинг?
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Покупаете авто или спецтехнику на компанию? Сравните переплаты и узнайте, как легально сэкономить до 40% на налогах.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* КРЕДИТ */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-gray-200 text-gray-600 flex items-center justify-center rounded-full">🚗</span>
              Автокредит
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✕</span>
                <span className="text-gray-700">Имущество сразу в залоге у банка</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✕</span>
                <span className="text-gray-700">Увеличивает долговую нагрузку компании</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">✕</span>
                <span className="text-gray-700">НДС не возмещается (если продавец без НДС)</span>
              </li>
            </ul>
            <div className="mt-auto p-4 bg-gray-200 rounded-xl">
              <span className="text-sm text-gray-600 font-bold">Выгода:</span>
              <div className="text-xl font-black text-gray-900 mt-1">Только скидка от дилера</div>
            </div>
          </div>

          {/* ЛИЗИНГ */}
          <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-3xl p-8 border border-indigo-700 shadow-2xl relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute -right-10 -top-10 text-indigo-500/20 text-9xl">🚜</div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
              <span className="w-10 h-10 bg-indigo-500 text-white flex items-center justify-center rounded-full">💼</span>
              Лизинг
            </h3>
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✓</span>
                <span className="text-indigo-100">Возврат 20% НДС со всей суммы договора</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✓</span>
                <span className="text-indigo-100">Снижение налога на прибыль (платежи идут в расходы)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✓</span>
                <span className="text-indigo-100">Ускоренная амортизация с коэффициентом до 3</span>
              </li>
            </ul>
            <div className="mt-auto p-4 bg-indigo-800/50 rounded-xl border border-indigo-500/30 relative z-10">
              <span className="text-sm text-indigo-300 font-bold">Налоговая выгода:</span>
              <div className="text-2xl font-black text-green-400 mt-1">До 40% от стоимости</div>
            </div>
            <button className="w-full mt-6 bg-white text-indigo-900 font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors relative z-10">
              Каталог лизинговых компаний
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}