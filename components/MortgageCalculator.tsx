'use client';
import { useState, useEffect } from 'react';

export default function MortgageCalculator() {
  const [amount, setAmount] = useState(3000000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);
  const [earlyPayment, setEarlyPayment] = useState(5000);
  const [earlyType, setEarlyType] = useState<'term' | 'payment'>('term');

  const [standardPayment, setStandardPayment] = useState(0);
  const [standardOverpayment, setStandardOverpayment] = useState(0);
  const [newOverpayment, setNewOverpayment] = useState(0);
  const [savedMoney, setSavedMoney] = useState(0);
  const [savedMonths, setSavedMonths] = useState(0);

  useEffect(() => {
    const r = rate / 100 / 12; 
    const n = years * 12; 

    const p = Math.round(amount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    setStandardPayment(p);
    
    const totalStandard = p * n;
    const overStandard = totalStandard - amount;
    setStandardOverpayment(overStandard);

    let currentDebt = amount;
    let currentPayment = p;
    let totalPaidExtra = 0;
    let monthsElapsed = 0;

    for (let i = 1; i <= n; i++) {
      if (currentDebt <= 0) break;

      const interestForMonth = currentDebt * r;
      let principalForMonth = currentPayment - interestForMonth;

      const extra = Number(earlyPayment) || 0;
      principalForMonth += extra;

      totalPaidExtra += interestForMonth; 
      currentDebt -= principalForMonth;
      monthsElapsed++;

      if (earlyType === 'payment' && currentDebt > 0) {
        const remainingMonths = n - i;
        currentPayment = currentDebt * (r * Math.pow(1 + r, remainingMonths)) / (Math.pow(1 + r, remainingMonths) - 1);
      }
      
      if (monthsElapsed > 1000) break; 
    }

    setNewOverpayment(totalPaidExtra);
    setSavedMoney(overStandard - totalPaidExtra);
    setSavedMonths(n - monthsElapsed);

  }, [amount, rate, years, earlyPayment, earlyType]);

  const formatNum = (num: number) => new Intl.NumberFormat('ru-RU').format(Math.round(num));

  return (
    <section className="py-16 bg-white border-t border-gray-100" id="mortgage-calc">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Умный калькулятор досрочных платежей</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Узнайте, как добавление всего пары тысяч рублей к ежемесячному платежу ломает банковскую систему и экономит вам миллионы на ипотеке.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden lg:flex">
          <div className="p-8 lg:w-1/2 bg-white">
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-gray-700">Сумма кредита (₽)</label>
                <span className="text-indigo-600 font-bold">{formatNum(amount)}</span>
              </div>
              <input type="range" min="500000" max="20000000" step="100000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full accent-indigo-600" />
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-gray-700">Срок (лет)</label>
                <span className="text-indigo-600 font-bold">{years}</span>
              </div>
              <input type="range" min="1" max="30" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-indigo-600" />
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-gray-700">Ставка (% годовых)</label>
                <span className="text-indigo-600 font-bold">{rate}%</span>
              </div>
              <input type="range" min="3" max="30" step="0.5" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-indigo-600" />
            </div>

            <div className="mt-8 p-5 bg-indigo-50 border border-indigo-100 rounded-2xl">
              <h4 className="font-bold text-indigo-900 mb-4">Ежемесячная досрочка</h4>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-indigo-700">Вносить сверх платежа (₽)</label>
                <span className="text-indigo-700 font-bold">+{formatNum(earlyPayment)}</span>
              </div>
              <input type="range" min="0" max="100000" step="1000" value={earlyPayment} onChange={(e) => setEarlyPayment(Number(e.target.value))} className="w-full accent-indigo-600 mb-4" />
              
              <div className="flex gap-2">
                <button 
                  onClick={() => setEarlyType('term')} 
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${earlyType === 'term' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border border-indigo-200'}`}
                >
                  Снижать срок
                </button>
                <button 
                  onClick={() => setEarlyType('payment')} 
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${earlyType === 'payment' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 border border-indigo-200'}`}
                >
                  Снижать платеж
                </button>
              </div>
            </div>
          </div>

          <div className="p-8 lg:w-1/2 bg-gray-900 text-white flex flex-col justify-center">
            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Базовый платеж</p>
              <div className="text-4xl font-black text-white">{formatNum(standardPayment)} ₽<span className="text-lg text-gray-500 font-medium">/мес</span></div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8 border-t border-gray-800 pt-6">
              <div>
                <p className="text-gray-400 text-xs mb-1">Переплата без досрочек</p>
                <p className="text-xl font-bold text-gray-300">{formatNum(standardOverpayment)} ₽</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Новая переплата</p>
                <p className="text-xl font-bold text-indigo-400">{formatNum(newOverpayment)} ₽</p>
              </div>
            </div>

            {earlyPayment > 0 ? (
              <div className="bg-indigo-600 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <p className="text-indigo-100 text-sm font-bold uppercase tracking-wider mb-2">Ваша чистая выгода:</p>
                <div className="text-3xl font-black text-white mb-2">
                  {formatNum(savedMoney)} ₽
                </div>
                {earlyType === 'term' && savedMonths > 0 && (
                  <p className="text-indigo-100">
                    И вы закроете долг на <strong className="text-white bg-indigo-500 px-2 py-0.5 rounded">{(savedMonths / 12).toFixed(1)} лет</strong> раньше!
                  </p>
                )}
                {earlyType === 'payment' && (
                  <p className="text-indigo-100">
                    Ваш обязательный платеж будет уменьшаться каждый месяц!
                  </p>
                )}
              </div>
            ) : (
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 border-dashed">
                <p className="text-gray-400 text-center">Добавьте досрочный платеж слева, чтобы увидеть магию экономии 🪄</p>
              </div>
            )}

            <a href="#mortgage" className="mt-8 block w-full py-4 text-center bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors">
              Подобрать выгодную ипотеку
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
