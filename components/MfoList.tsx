'use client';

export default function MfoList() {
  const mfoOffers = [
    { 
      name: "Займер", 
      amount: "до 30 000 ₽", 
      rate: "0% новым клиентам", 
      features: "Выдает робот за 1 минуту. Одобряют всем.",
      tag: "🔥 Хит: Одобряют 98%",
      link: "https://trckcp.com/dl/muLqx3nOJap6/106/?erid=2SDnjdZrWX1" // <-- ТВОЯ ССЫЛКА НА ЗАЙМЕР
    },
    { 
      name: "Екапуста", 
      amount: "до 30 000 ₽", 
      rate: "0% первый займ", 
      features: "Круглосуточно на любую карту без звонков.",
      tag: "Народный выбор",
      link: "https://trckcp.com/dl/DBQTPsx31WaT/730/?erid=2SDnjbvxVz9" // <-- ТВОЯ ССЫЛКА НА ЕКАПУСТУ
    },
    { 
      name: "Webbankir", 
      amount: "до 30 000 ₽", 
      rate: "0% до 30 дней", 
      features: "Моментальный перевод через СБП. Нужен только паспорт.",
      tag: "Быстрая выдача",
      link: "https://trckcp.com/dl/5VdcQZnCRf8J/812/?erid=2SDnjc61BVU" // <-- ТВОЯ ССЫЛКА НА ВЕББАНКИР
    },
    { 
      name: "Moneyman", 
      amount: "до 30 000 ₽", 
      rate: "0% до 21 дня", 
      features: "Перевод на карту или наличными. Высокий шанс.",
      tag: "Высокий шанс",
      link: "https://trckcp.com/dl/M4opnyloHRUQ/749/?erid=2SDnjcBbK45" // <-- ТВОЯ ССЫЛКА НА MONEYMAN
    }
  ];

  return (
    <section className="py-16 bg-red-50 rounded-[2rem] my-8 mx-4 lg:mx-8 border border-red-100" id="mfo">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">
          Срочные займы под 0%
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Одобряют с любой кредитной историей. Новым клиентам деньги выдаются абсолютно бесплатно — сколько взяли, столько и вернули.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mfoOffers.map((mfo, index) => (
             <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-red-50 hover:shadow-xl transition-all flex flex-col h-full relative overflow-hidden">
               {/* Красная полоска сверху карточки */}
               <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
               
               <div className="mb-4 text-center pt-2">
                 <h3 className="text-2xl font-black text-gray-900 mb-2">{mfo.name}</h3>
                 <span className="text-xs font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full">{mfo.tag}</span>
               </div>
               
               <div className="bg-green-100 text-green-800 text-sm font-black px-4 py-2 rounded-xl text-center mb-5">
                 {mfo.rate}
               </div>

               <div className="space-y-2 mb-6 flex-grow text-sm">
                 <div className="flex justify-between border-b border-gray-100 pb-2">
                   <span className="text-gray-500">Сумма:</span>
                   <span className="font-bold text-gray-900">{mfo.amount}</span>
                 </div>
                 <div className="pt-2 text-gray-600 leading-tight">
                   <span className="text-green-500 font-bold mr-1">✓</span> {mfo.features}
                 </div>
               </div>

               <a href={mfo.link} target="_blank" rel="noopener noreferrer" className="mt-auto block w-full py-4 px-4 bg-red-600 hover:bg-red-700 text-white text-center font-bold rounded-xl transition-colors shadow-md">
                 Получить деньги
               </a>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
