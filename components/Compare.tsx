'use client';
import { useState } from 'react';

export default function Compare() {
  const [activeTab, setActiveTab] = useState(2);

  const tactics: Record<number, any> = {
    1: {
      title: "Сделать рефинансирование",
      subtitle: "Ставка уменьшится на 2%",
      savings: "+ 124 000 ₽",
      term: "Без изменений",
      color: "bg-blue-500",
      desc: "Идеально, если ставки на рынке упали. Вы просто переводите долг в другой банк. Платеж становится меньше, а срок остается прежним."
    },
    2: {
      title: "Ежемесячное досрочное погашение",
      subtitle: "Платить на 15 000 ₽ больше",
      savings: "+ 412 000 ₽",
      term: "Меньше на 1 г. 8 мес.",
      color: "bg-green-500",
      desc: "Самая выгодная стратегия. Направляя свободные деньги прямо в тело долга, вы отсекаете самые дорогие проценты банка."
    },
    3: {
      title: "Увеличить срок на 2 года",
      subtitle: "Снизить платеж на 12 000 ₽",
      savings: "- 185 000 ₽ (переплата)",
      term: "Плюс 2 года",
      color: "bg-orange-500",
      desc: "Стратегия безопасности. Если упали доходы, лучше растянуть срок и снизить ежемесячный платеж, чтобы не допустить просрочек."
    }
  };

  const scrollToCalculator = () => {
    const calc = document.getElementById('calculator');
    if (calc) {
      calc.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="compare">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            А что, если изменить тактику?
          </h2>
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 max-w-3xl mx-auto inline-block">
            <p className="text-lg text-indigo-900">
              Расчеты приведены для базового кейса: <b>кредит 1 500 000 ₽</b> на <b>5 лет</b> по ставке <b>20% годовых</b>. 
              Посмотрите, как изменение стратегии влияет на итоговую переплату.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2 space-y-4">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Выберите сценарий</h3>
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                onClick={() => setActiveTab(num)}
                className={`p-6 rounded-2xl cursor-pointer transition-all border-2 ${
                  activeTab === num 
                    ? 'border-indigo-600 bg-white shadow-lg scale-[1.02]' 
                    : 'border-transparent bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <div className="text-sm font-bold text-indigo-600 mb-1">{tactics[num].subtitle}</div>
                <div className="text-xl font-bold text-gray-900">{tactics[num].title}</div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className={`absolute top-0 left-0 right-0 h-2 ${tactics[activeTab].color} transition-colors duration-500`}></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Результат стратегии</h3>
            <div className="mb-8">
              <div className="text-sm font-bold text-gray-400 uppercase mb-2">Финансовый итог</div>
              <div className={`text-4xl md:text-5xl font-black ${activeTab === 3 ? 'text-orange-500' : 'text-green-500'}`}>
                {tactics[activeTab].savings}
              </div>
            </div>
            <div className="mb-8 pb-8 border-b border-gray-100">
              <div className="text-sm font-bold text-gray-400 uppercase mb-2">Новый срок кредита</div>
              <div className="text-2xl font-bold text-gray-900">{tactics[activeTab].term}</div>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed h-20">{tactics[activeTab].desc}</p>
            <button onClick={scrollToCalculator} className="w-full bg-gray-900 hover:bg-indigo-600 text-white font-bold py-4 rounded-xl transition-all shadow-md">
              Применить к моему кредиту &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}