'use client';
import { useState, useEffect } from 'react';

// Умный склонятор для русского языка (1 год, 2 года, 5 лет)
const pluralizeYears = (count: number) => {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod100 >= 11 && mod100 <= 14) return 'лет';
  if (mod10 === 1) return 'год';
  if (mod10 >= 2 && mod10 <= 4) return 'года';
  return 'лет';
};

// Функция для получения ссылки (замени на свои рефералки, где нужно)
const getBankLink = (bankName: string) => {
  if (bankName.includes("Альфа")) return "https://alfabank.ru/";
  if (bankName.includes("Т-Банк") || bankName.includes("Тинькофф")) return "https://tbank.ru/";
  if (bankName.includes("Сбер")) return "https://sberbank.ru/";
  if (bankName.includes("Газпром")) return "https://gazprombank.ru/";
  
  if (bankName.includes("ВТБ")) return "https://vtb.ru/personal/kredit/nalichnymi/";
  if (bankName.includes("ПСБ")) return "https://psbank.ru/Personal/Loans";
  if (bankName.includes("Россельхоз")) return "https://rshb.ru/natural/loans/";
  if (bankName.includes("Совком")) return "https://sovcombank.ru/credits/";
  if (bankName.includes("Уралсиб")) return "https://uralsib.ru/kredity";
  
  return `https://yandex.ru/search/?text=взять+кредит+${bankName}`;
};

export default function Calculator() {
  const [banks, setBanks] = useState<any[]>([]);
  const [amount, setAmount] = useState(500000);
  const [months, setMonths] = useState(60);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://finprosto-backend.onrender.com/api/get_market_data")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setBanks(data.data.banks);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка загрузки:", error);
        setLoading(false);
      });
  }, []);

  const calculatePayment = (rate: number) => {
    const monthlyRate = rate / 100 / 12;
    const payment = amount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(payment);
  };

  const formatMoney = (sum: number) => sum.toLocaleString('ru-RU') + ' ₽';

  if (loading) {
    return (
      <section className="w-full py-16 bg-gray-50 flex justify-center items-center">
        <div className="text-xl font-bold animate-pulse text-indigo-600">Загрузка актуальных ставок...</div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 bg-gray-50" id="calculator">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-xl text-gray-800">
          <h2 className="text-3xl font-extrabold text-center mb-8">Калькулятор кредита</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <label className="block text-sm font-semibold text-gray-500 mb-2">Сумма кредита</label>
              <div className="text-3xl font-bold text-indigo-600 mb-4">{formatMoney(amount)}</div>
              <input 
                type="range" min="50000" max="5000000" step="10000" 
                value={amount} onChange={(e) => setAmount(Number(e.target.value))} 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2"><span>50 тыс. ₽</span><span>5 млн. ₽</span></div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <label className="block text-sm font-semibold text-gray-500 mb-2">Срок кредита</label>
              <div className="text-3xl font-bold text-indigo-600 mb-4">
                {months / 12} {pluralizeYears(months / 12)} <span className="text-lg text-gray-400 font-medium">({months} мес.)</span>
              </div>
              <input 
                type="range" min="12" max="84" step="12" 
                value={months} onChange={(e) => setMonths(Number(e.target.value))} 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2"><span>1 год</span><span>7 лет</span></div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Предложения банков</h3>
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {banks.map((bank, index) => {
              const payment = calculatePayment(bank.rate);
              const checkoutLink = getBankLink(bank.name);
              
              return (
                <div key={index} className="flex flex-col md:flex-row items-center justify-between p-5 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md transition-all hover:border-indigo-300">
                  <div className="flex-1 w-full mb-4 md:mb-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xl font-bold">{bank.name}</span>
                      {bank.badge && <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md font-semibold">{bank.badge}</span>}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">Ставка: {bank.rate}% годовых</div>
                  </div>
                  <div className="text-center md:text-right w-full md:w-auto md:pr-8 mb-4 md:mb-0">
                    <div className="text-sm text-gray-500 mb-1">Платеж в месяц</div>
                    <div className="text-2xl font-black text-gray-900">{formatMoney(payment)}</div>
                  </div>
                  <a 
                    href={checkoutLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm hover:shadow-lg text-center block"
                  >
                    Оформить
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}