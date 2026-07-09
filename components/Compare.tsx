'use client';
import { useState } from 'react';

export default function Compare() {
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);

  const leasingCompanies = [
    { name: "СберЛизинг", tag: "Гос. поддержка", link: "https://www.sberleasing.ru/" },
    { name: "Европлан", tag: "Одобрение за 1 час", link: "https://europlan.ru/" },
    { name: "ВТБ Лизинг", tag: "Низкий аванс от 0%", link: "https://vtb-leasing.ru/" },
    { name: "Газпромбанк Автолизинг", tag: "Скидки от дилеров", link: "https://autogpb.ru/" },
    { name: "Альфа-Лизинг", tag: "Без финансового анализа", link: "https://alfaleasing.ru/" }
  ];

  const scrollToCompanies = () => {
    setIsCompaniesOpen(true);
    setTimeout(() => {
      const el = document.getElementById('leasing-list');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <section className="py-20 bg-white" id="compare">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16">
          <span className="bg-indigo-100 text-indigo-700 font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-4 inline-block">
            Для бизнеса и ИП
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Кредит или Лизинг?</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Покупаете авто или спецтехнику на компанию? Сравните переплаты и узнайте, как легально сэкономить до 40% на налогах.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Автокредит */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-white shadow-sm text-gray-600 flex items-center justify-center rounded-full">🚗</span>
              Автокредит
            </h3>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3"><span className="text-red-500 font-bold text-lg leading-none">✕</span><span className="text-gray-700 font-medium">Имущество сразу в залоге у банка</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500 font-bold text-lg leading-none">✕</span><span className="text-gray-700 font-medium">Увеличивает долговую нагрузку компании</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500 font-bold text-lg leading-none">✕</span><span className="text-gray-700 font-medium">НДС не возмещается</span></li>
            </ul>
            <div className="mt-auto p-5 bg-white border border-gray-200 rounded-2xl text-center">
              <span className="text-sm text-gray-500 font-bold uppercase tracking-wide">Финансовая выгода:</span>
              <div className="text-xl font-black text-gray-900 mt-2">Только скидка от дилера</div>
            </div>
          </div>

          {/* Лизинг */}
          <div className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl p-8 shadow-2xl relative overflow-hidden transform md:-translate-y-4 flex flex-col">
            <div className="absolute -right-4 -top-4 text-white/20 text-9xl pointer-events-none">🚜</div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
              <span className="w-10 h-10 bg-white/20 text-white flex items-center justify-center rounded-full shadow-inner">💼</span>
              Лизинг
            </h3>
            <ul className="space-y-4 mb-8 relative z-10 flex-grow">
              <li className="flex items-start gap-3"><span className="text-white font-bold text-lg leading-none">✓</span><span className="text-indigo-50 font-medium">Возврат 20% НДС со всей суммы договора</span></li>
              <li className="flex items-start gap-3"><span className="text-white font-bold text-lg leading-none">✓</span><span className="text-indigo-50 font-medium">Платежи идут в расходы (снижение налога)</span></li>
              <li className="flex items-start gap-3"><span className="text-white font-bold text-lg leading-none">✓</span><span className="text-indigo-50 font-medium">Ускоренная амортизация с коэффициентом до 3</span></li>
            </ul>
            <div className="mt-auto relative z-10">
              <div className="p-5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl text-center mb-6">
                <span className="text-sm text-indigo-100 font-bold uppercase tracking-wide">Налоговая выгода:</span>
                <div className="text-3xl font-black text-white mt-2">До 40% экономии</div>
              </div>
              
              {/* КНОПКА ТЕПЕРЬ ЧЕРНАЯ (синеет при наведении) */}
              <button 
                onClick={scrollToCompanies}
                className="w-full bg-gray-900 text-white hover:bg-indigo-600 font-black py-4 rounded-xl transition-all shadow-lg text-lg"
              >
                Посмотреть ТОП-5 компаний
              </button>
            </div>
          </div>
        </div>

        {/* СПИСОК КОМПАНИЙ */}
        {isCompaniesOpen && (
          <div id="leasing-list" className="mt-12 bg-gray-50 rounded-3xl p-8 border border-gray-100 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Официальные партнеры</h3>
            <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
              {leasingCompanies.map((company, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-0">
                    <span className="text-xl font-black text-gray-800">{company.name}</span>
                    <span className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-full font-bold">
                      {company.tag}
                    </span>
                  </div>
                  {/* Кнопки тоже ЧЕРНЫЕ -> СИНИЕ */}
                  <a 
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-gray-900 hover:bg-indigo-600 text-white font-bold py-2.5 px-6 rounded-xl transition-colors text-center text-sm shadow-md"
                  >
                    На сайт партнера &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}