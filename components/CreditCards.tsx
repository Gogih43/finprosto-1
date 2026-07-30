'use client';

export default function CreditCards() {
  const cardOffers = [
     { 
      name: "Яндекс Банк (Супер Сплит)", 
      limit: "Индивидуально", 
      gracePeriod: "Выгодный сплит", 
      features: "Оплата покупок частями",
      tag: "🔥 Хит: Решение за 1 минуту",
      link: "https://trckcp.com/dl/5gUbQZnCRf8J/1028/?erid=2SDnjdMjpzv" 
    },
    { 
      name: "Т-Банк Платинум", 
      limit: "до 1 000 000 ₽", 
      gracePeriod: "до 55 дней", 
      features: "Кешбэк баллами за всё",
      tag: "Одобряют почти всем",
      link: "https://trckcp.com/dl/CiJPSrJgpzQ4/137/?erid=2SDnjbsyxhW" 
    },
    { 
      name: "Уралсиб", 
      limit: "до 1 000 000 ₽", 
      gracePeriod: "120 дней без %", 
      features: "Без комиссий и переплат",
      tag: "Высокий шанс",
      link: "https://trckcp.com/dl/FQBeGX8NaP3Y/9/?erid=2SDnjcVb2gX" 
    },
    { 
      name: "Ozon Банк", 
      limit: "Индивидуально", 
      gracePeriod: "до 140 дней", 
      features: "Скидки до 30% на маркетплейсе",
      tag: "Для покупок",
      link: "https://trckcp.com/dl/YFNLETxCGlb0/1259/?erid=2SDnjdBjQYS" 
    },
    { 
      name: "ВТБ", 
      limit: "до 1 000 000 ₽", 
      gracePeriod: "До 200 дней", 
      features: "Кешбэк 20% на все покупки",
      tag: "Выгодный кешбэк",
      link: "https://trckcp.com/dl/pR93klVeMgbn/1243/?erid=2SDnjd8vpvv" 
    },
    { 
      name: "Сбербанк", 
      limit: "до 1 000 000 ₽", 
      gracePeriod: "120 дней без %", 
      features: "Бесплатное обслуживание навсегда",
      tag: "Народный выбор",
      link: "https://trckcp.com/dl/keFbKT9MVfb0/167/?erid=2SDnjeHQWnD" 
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100" id="credit-cards">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">Кредитные карты</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardOffers.map((card, index) => (
             <div key={index} className="bg-gray-50 border border-gray-100 rounded-3xl p-6 hover:shadow-lg transition-all flex flex-col h-full">
               <div className="mb-4">
                 <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full mb-3 inline-block">{card.tag}</span>
                 <h3 className="text-xl font-bold text-gray-900">{card.name}</h3>
               </div>
               <div className="space-y-3 mb-6 flex-grow">
                 <div>
                   <p className="text-xs text-gray-500 uppercase font-semibold">Льготный период</p>
                   <p className="text-lg font-black text-indigo-600">{card.gracePeriod}</p>
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 uppercase font-semibold">Кредитный лимит</p>
                   <p className="font-medium text-gray-900">{card.limit}</p>
                 </div>
                 <p className="text-sm text-gray-600 pt-2 border-t border-gray-200 mt-2">✓ {card.features}</p>
               </div>
               <a href={card.link} target="_blank" rel="noopener noreferrer" className="w-full bg-gray-900 hover:bg-indigo-600 text-white font-bold py-3 rounded-xl text-center transition-colors">
                 Оформить карту
               </a>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}