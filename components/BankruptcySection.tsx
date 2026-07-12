'use client';
import { useState } from 'react';

export default function BankruptcySection() {
  const [step, setStep] = useState(1);
  const [debtAmount, setDebtAmount] = useState(500000);

  // Обновленный список компаний с твоими данными
  const bankruptcyCompanies = [
    { 
      name: "Банкрот Консалт", 
      price: "от 8 460 ₽/мес.", 
      tag: "Оформление онлайн", 
      features: ["Консультация бесплатно", "Защита от коллекторов"],
      link: "https://bankrotconsult.ru/" 
    },
    { 
      name: "ФЦБГ", 
      price: "от 4 900 ₽/мес.", 
      tag: "Лучшие отзывы", 
      features: ["Рассрочка", "Бесплатная консультация"],
      link: "https://fcbg.ru/" 
    },
    { 
      name: "2Лекс", 
      price: "от 7 960 ₽/мес.", 
      tag: "Популярный выбор", 
      features: ["Рассрочка", "Защита от коллекторов"],
      link: "https://2lex.ru/" 
    },
    { 
      name: "НССД", 
      price: "от 15 000 ₽/мес.", 
      tag: "Премиум сервис", 
      features: ["Под ключ", "Гарантия результата"],
      link: "https://nssd.su/" 
    },
    { 
      name: "КРЕДИТА НЕТ", 
      price: "от 3 860 ₽/мес.", 
      tag: "Самая низкая цена", 
      features: ["Рассрочка", "Консультация бесплатно"],
      link: "https://kredita.net/" 
    }
  ];

  return (
    <section className="py-20 bg-rose-50/30 relative overflow-hidden" id="bankruptcy">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <span className="bg-red-100 text-red-600 font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-4 inline-block">
            Федеральный закон №127-ФЗ
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Не справляетесь с долгами?
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Государство позволяет законно списать кредиты. Пройдите тест за 1 минуту и узнайте, подходите ли вы под процедуру.
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-3xl p-6 md:p-12 shadow-xl border border-gray-100 max-w-3xl mx-auto">
          
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-center">Какая у вас общая сумма долгов?</h3>
              <p className="text-center text-gray-400 mb-8 font-medium">(включая кредиты, МФО, ЖКХ и налоги)</p>
              <div className="text-4xl md:text-5xl font-black text-indigo-600 text-center mb-8">
                {debtAmount.toLocaleString('ru-RU')} ₽
              </div>
              <input 
                type="range" min="50000" max="3000000" step="50000" 
                value={debtAmount} onChange={(e) => setDebtAmount(Number(e.target.value))} 
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 mb-10" 
              />
              <button onClick={() => setStep(2)} className="w-full bg-gray-900 hover:bg-indigo-600 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-md">
                Далее &rarr;
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-8 text-center">Есть ли у вас просрочки по платежам?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onClick={() => setStep(3)} className="border-2 border-gray-100 hover:border-indigo-600 hover:bg-indigo-50 text-gray-700 font-bold py-4 px-2 rounded-xl text-base md:text-lg transition-all">
                  Да, звонят коллекторы
                </button>
                <button onClick={() => setStep(3)} className="border-2 border-gray-100 hover:border-indigo-600 hover:bg-indigo-50 text-gray-700 font-bold py-4 px-2 rounded-xl text-base md:text-lg transition-all">
                  Пока нет, но скоро будут
                </button>
              </div>
            </div>
          )}

          {/* ШАГ 3: Исправленный рейтинг компаний */}
          {step === 3 && (
            <div className="animate-fade-in text-center w-full">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Вам доступно списание долгов</h3>
              <p className="text-sm md:text-base text-gray-500 mb-8 leading-relaxed">
                Мы подобрали ТОП-5 надежных компаний, которые помогут законно списать <b>{debtAmount.toLocaleString('ru-RU')} ₽</b>. Сравните стоимость и выберите партнера.
              </p>
              
              <div className="flex flex-col gap-4 w-full mb-8 text-left">
                {bankruptcyCompanies.map((company, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 md:p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all group overflow-hidden">
                    
                    {/* Левая часть: Место, Название, Тег */}
                    <div className="flex items-start md:items-center gap-3 w-full md:w-auto mb-4 md:mb-0">
                      <div className="w-10 h-10 shrink-0 bg-white shadow-sm border border-gray-200 rounded-full flex items-center justify-center font-black text-gray-400">
                        {index + 1}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-base md:text-lg font-black text-gray-900">{company.name}</span>
                          <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase whitespace-nowrap">
                            {company.tag}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500 font-medium mt-1.5 md:mt-0">
                          {company.features.map((feature, i) => (
                            <span key={i} className="flex items-center gap-1">
                              <span className="text-green-500 font-bold">✓</span> {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Правая часть: Цена и Кнопка */}
                    <div className="flex flex-col w-full md:w-auto gap-3 pt-4 md:pt-0 border-t border-gray-200 md:border-t-0 mt-2 md:mt-0">
                      
                      <div className="flex flex-row md:flex-col justify-between items-center md:items-end">
                        <div className="text-xs text-gray-400 font-bold uppercase">Стоимость</div>
                        {/* ИСПРАВЛЕНИЕ 1: whitespace-nowrap запрещает перенос цены */}
                        <div className="text-lg md:text-xl font-black text-indigo-600 whitespace-nowrap">
                          {company.price}
                        </div>
                      </div>

                      {/* ИСПРАВЛЕНИЕ 2: w-full заставляет кнопку занять всю ширину на мобилке */}
                      <a 
                        href={company.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full md:w-auto text-center bg-gray-900 hover:bg-indigo-600 text-white font-bold py-3 md:py-2.5 px-6 rounded-xl transition-colors text-sm shadow-md"
                      >
                        Перейти на сайт &rarr;
                      </a>
                      
                    </div>

                  </div>
                ))}
              </div>

              <button onClick={() => setStep(1)} className="text-sm text-gray-400 hover:text-gray-600 underline font-medium">
                Пройти тест заново
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}