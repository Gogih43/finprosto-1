'use client';
import { useState } from 'react';

export default function BankruptcySection() {
  const [step, setStep] = useState(1);
  const [debtAmount, setDebtAmount] = useState(500000);

  const whatsappLink = `https://wa.me/79990000000?text=Здравствуйте! Прошел тест на сайте FINПРОСТО. Долг ${debtAmount} руб. Хочу узнать про банкротство.`;

  return (
    // Заменили bg-gray-900 на мягкий белый с очень легким красным оттенком (rose-50) для фона
    <section className="py-20 bg-rose-50/30 relative overflow-hidden" id="bankruptcy">
      {/* Мягкий декоративный блик вместо жесткого красного пятна */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

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

        {/* Квиз на кристально белом фоне */}
        <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 max-w-2xl mx-auto">
          
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
              <button onClick={() => setStep(2)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl text-lg transition-all shadow-md">
                Далее &rarr;
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-8 text-center">Есть ли у вас просрочки по платежам?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onClick={() => setStep(3)} className="border-2 border-gray-100 hover:border-indigo-600 hover:bg-indigo-50 text-gray-700 font-bold py-4 rounded-xl text-lg transition-all">
                  Да, звонят коллекторы
                </button>
                <button onClick={() => setStep(3)} className="border-2 border-gray-100 hover:border-indigo-600 hover:bg-indigo-50 text-gray-700 font-bold py-4 rounded-xl text-lg transition-all">
                  Пока нет, но скоро будут
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in text-center">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Вам доступно списание долгов</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Вы можете законно списать <b>{debtAmount.toLocaleString('ru-RU')} ₽</b>. <br/><br/>
                Мы не собираем ваши данные. Нажмите кнопку ниже, чтобы перейти в защищенный чат WhatsApp с юристом. Он изучит ситуацию бесплатно.
              </p>
              {/* Кнопка WhatsApp (оставляем зеленой, так как это фирменный цвет мессенджера) */}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-green-500/30">
                Написать юристу в WhatsApp
              </a>
              <button onClick={() => setStep(1)} className="mt-6 text-sm text-gray-400 hover:text-gray-600 underline font-medium">
                Пройти тест заново
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}