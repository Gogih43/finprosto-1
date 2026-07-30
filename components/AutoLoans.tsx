'use client';

export default function AutoLoans() {
  const autoOffers = [
   // 1. АЛЬФА-БАНК (Сделали его супер-привлекательным, вставляем реф. ссылку)
    { 
      name: "Альфа-Банк", 
      rate: "от 4.5%", 
      amount: "до 7.5 млн ₽", 
      features: "🔥 Деньги сразу на карту, машина потом",
      tag: "ХИТ: Одобрение за 2 мин",
      link: "https://pxl.leads.su/click/231d13ae05f02a18fbf82380d55c02f4" // <-- Ваша денежная ссылка
    },
    // 2. ВТБ (Для солидности, прямая ссылка)
    { 
      name: "ВТБ", 
      rate: "от 4.9%", 
      amount: "до 10 млн ₽", 
      features: "Без КАСКО и залога ПТС",
      tag: "Народный выбор",
      link: "https://www.vtb.ru/personal/avtokredity/" // <-- Прямая ссылка
    },
    // 3. Газпромбанк (Для солидности, прямая ссылка)
    { 
      name: "Газпромбанк", 
      rate: "от 8.9%", 
      amount: "до 7 млн ₽", 
      features: "На новые и автомобили с пробегом",
      tag: "Прозрачные условия",
      link: "https://www.gazprombank.ru/personal/avtokredit/5601789/" // <-- Прямая ссылка
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="autoloans">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">Автокредиты</h2>
        <div className="space-y-4">
          {autoOffers.map((offer, index) => (
             <div key={index} className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between hover:shadow-md transition-all">
               <div className="flex-1 w-full mb-4 md:mb-0">
                 <h3 className="text-xl font-bold text-gray-900 mb-1">{offer.name}</h3>
                 <p className="text-sm text-gray-500 font-medium">✓ {offer.features}</p>
               </div>
               <div className="flex gap-6 mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
                 <div>
                   <p className="text-xs text-gray-400 uppercase font-bold">Ставка</p>
                   <p className="text-xl font-black text-indigo-600">{offer.rate}</p>
                 </div>
                 <div>
                   <p className="text-xs text-gray-400 uppercase font-bold">Сумма</p>
                   <p className="text-lg font-bold text-gray-900">{offer.amount}</p>
                 </div>
               </div>
               <div className="w-full md:w-auto md:ml-8">
                 <a href={offer.link} target="_blank" rel="noopener noreferrer" className="block w-full md:w-auto px-8 py-3 bg-gray-900 hover:bg-indigo-600 text-white font-bold rounded-xl text-center transition-colors">
                   Рассчитать
                 </a>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
