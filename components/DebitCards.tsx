'use client';

export default function DebitCards() {
  const debitOffers = [
    { 
      name: "Т-Банк Black", 
      maintenance: "0 ₽ навсегда", 
      cashback: "до 30% рублями", 
      features: "Переводы без комиссии",
      tag: "Лучшая для кэшбэка",
      link: "#" // ВСТАВЬ СЮДА СВОЮ ССЫЛКУ
    },
    { 
      name: "Альфа-Карта", 
      maintenance: "Бесплатно", 
      cashback: "5% в 4 категориях", 
      features: "100% на случайную категорию",
      tag: "🔥 Хит: Суперкэшбэк",
      link: "#" // ВСТАВЬ СЮДА ССЫЛКУ
    },
    { 
      name: "Умная карта Газпромбанк", 
      maintenance: "0 ₽ без условий", 
      cashback: "до 50% у партнеров", 
      features: "Надбавка по накопительному счету",
      tag: "Выбор для вкладов",
      link: "#" // ВСТАВЬ СЮДА ССЫЛКУ
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100" id="debit-cards">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">Дебетовые карты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {debitOffers.map((card, index) => (
             <div key={index} className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-lg transition-all flex flex-col h-full">
               <div className="mb-4">
                 <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-3 inline-block">{card.tag}</span>
                 <h3 className="text-xl font-bold text-gray-900">{card.name}</h3>
               </div>
               <div className="space-y-3 mb-6 flex-grow">
                 <div>
                   <p className="text-xs text-gray-500 uppercase font-semibold">Кэшбэк</p>
                   <p className="text-lg font-black text-blue-600">{card.cashback}</p>
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 uppercase font-semibold">Обслуживание</p>
                   <p className="font-medium text-gray-900">{card.maintenance}</p>
                 </div>
                 <p className="text-sm text-gray-600 pt-2 border-t border-gray-200 mt-2">✓ {card.features}</p>
               </div>
               <a href={card.link} target="_blank" rel="noopener noreferrer" className="w-full bg-gray-900 hover:bg-blue-600 text-white font-bold py-3 rounded-xl text-center transition-colors">
                 Оформить карту
               </a>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
