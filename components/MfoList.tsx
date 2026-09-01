'use client';

export default function MfoList() {
  const mfoOffers = [
    { 
      name: "Займер", 
      amount: "до 30 000 ₽", 
      rate: "0% новым клиентам", 
      features: "Одобрение с плохой КИ за 2 мин",
      tag: "🔥 Одобряют 98%",
      link: "#" // ВСТАВЬ СЮДА ССЫЛКУ
    },
    { 
      name: "Екапуста", 
      amount: "до 30 000 ₽", 
      rate: "0% первый займ", 
      features: "Круглосуточно на любую карту",
      tag: "Без звонков",
      link: "#" // ВСТАВЬ СЮДА ССЫЛКУ
    },
    { 
      name: "Webbankir", 
      amount: "до 30 000 ₽", 
      rate: "0% до 30 дней", 
      features: "Перевод через СБП моментально",
      tag: "Быстрая выдача",
      link: "#" // ВСТАВЬ СЮДА ССЫЛКУ
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100" id="mfo">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">Займы под 0%</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mfoOffers.map((mfo, index) => (
             <div key={index} className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-lg transition-all flex flex-col h-full">
               <div className="mb-4">
                 <span className="text-xs font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full mb-3 inline-block">{mfo.tag}</span>
                 <h3 className="text-xl font-bold text-gray-900">{mfo.name}</h3>
               </div>
               <div className="space-y-3 mb-6 flex-grow">
                 <div>
                   <p className="text-xs text-gray-500 uppercase font-semibold">Ставка</p>
                   <p className="text-lg font-black text-red-600">{mfo.rate}</p>
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 uppercase font-semibold">Сумма</p>
                   <p className="font-medium text-gray-900">{mfo.amount}</p>
                 </div>
                 <p className="text-sm text-gray-600 pt-2 border-t border-gray-200 mt-2">✓ {mfo.features}</p>
               </div>
               <a href={mfo.link} target="_blank" rel="noopener noreferrer" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-center transition-colors shadow-md hover:shadow-lg">
                 Получить деньги
               </a>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
