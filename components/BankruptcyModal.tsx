'use client';
import { useState, useEffect } from 'react';

interface BankruptcyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BankruptcyModal({ isOpen, onClose }: BankruptcyModalProps) {
  const [step, setStep] = useState(1);
  const [debtAmount, setDebtAmount] = useState(500000);

  // 💡 МАГИЯ СБРОСА ПАМЯТИ: Как только isOpen меняется на true, сбрасываем шаги
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setDebtAmount(500000);
    }
  }, [isOpen]);

  // Ссылка на юриста
  const whatsappLink = `https://wa.me/79990000000?text=Здравствуйте! Прошел тест на сайте FINПРОСТО. Долг ${debtAmount} руб. Хочу узнать про банкротство.`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
      <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>
      
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl max-w-xl w-full relative z-10 animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-400 hover:text-gray-900 text-3xl font-light"
        >
          &times;
        </button>

        <div className="mb-8 text-center">
          <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-3 inline-block">
            ФЗ-127 "О несостоятельности"
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">Тест на списание долгов</h2>
        </div>

        {step === 1 && (
          <div>
            <h3 className="text-xl font-bold mb-2 text-center text-gray-800">Какая у вас общая сумма долгов?</h3>
            <p className="text-center text-gray-500 text-sm mb-6">(кредиты, микрозаймы, расписки, ЖКХ)</p>
            
            <div className="text-4xl font-black text-indigo-600 text-center mb-6">
              {debtAmount.toLocaleString('ru-RU')} ₽
            </div>
            
            <input 
              type="range" min="50000" max="3000000" step="50000" 
              value={debtAmount} onChange={(e) => setDebtAmount(Number(e.target.value))} 
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 mb-8" 
            />
            
            <button 
              onClick={() => setStep(2)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl text-lg transition-colors"
            >
              Далее &rarr;
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-6 text-center text-gray-800">Есть ли у вас просрочки по платежам?</h3>
            <div className="space-y-3">
              <button onClick={() => setStep(3)} className="w-full border-2 border-gray-200 hover:border-indigo-600 hover:bg-indigo-50 font-bold py-4 rounded-xl text-lg transition-all text-gray-700">
                Да, уже звонят коллекторы
              </button>
              <button onClick={() => setStep(3)} className="w-full border-2 border-gray-200 hover:border-indigo-600 hover:bg-indigo-50 font-bold py-4 rounded-xl text-lg transition-all text-gray-700">
                Пока нет, но платить нечем
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Вам доступно списание долгов</h3>
            <p className="text-gray-600 text-sm mb-6">
              Мы не собираем ваши данные на сайте. Нажмите кнопку, чтобы перейти в защищенный чат WhatsApp. Дежурный юрист изучит вашу ситуацию бесплатно.
            </p>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-lg hover:shadow-green-500/30"
            >
              Связаться с юристом в WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}