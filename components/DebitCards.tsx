'use client';

export default function DebitCards() {
  const debitOffers = [
    { 
      name: "Дебетовая Альфа-Карта", 
      maintenance: "0 ₽ навсегда", 
      cashback: "5% в 4 категориях", 
      features: "Суперкэшбэк до 100% каждый месяц",
      tag: "🔥 Хит продаж",
      link: "https://trckcp.com/dl/YUg7ETxCGlb0/69/?erid=2SDnjcN7kbk" // <-- ТВОЯ ССЫЛКА НА АЛЬФУ ИЗ РАФИНАДА
    },
    { 
      name: "ВТБ Карта МИР", 
      maintenance: "0 ₽ всегда", 
      cashback: "До 25% в любимых категориях", 
      features: "Снятие без комиссии в любых банкоматах",
      tag: "Высокий кэшбэк",
      link: "https://trckcp.com/dl/5VdlQZnCRf8J/18/?erid=2SDnjeQbg8S" // <-- ТВОЯ ССЫЛКА НА ВТБ ИЗ РАФИНАДА
    },
    { 
      name: "Т-Банк Black", 
      maintenance: "Бесплатно", 
      cashback: "До 30% у партнеров", 
      features: "Переводы без комиссии до 100 000 ₽",
      tag: "Народный выбор",
      link: "https://trckcp.com/dl/FsqSGX8NaP3Y/155/?erid=2SDnjdrL4Tr" // <-- ТВОЯ ССЫЛКА НА Т-БАНК ИЗ РАФИНАДА
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100" id="debit-cards">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">Дебетовые карты с кэшбэком</h2>
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
