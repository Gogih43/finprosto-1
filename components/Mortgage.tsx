'use client';

export default function Mortgage() {
  // Ваши офферы по ипотеке (Ссылки вставите от Leads.su или Rafinad)
  const mortgageOffers = [
   // 1. АЛЬФА-БАНК (Сделали его максимально привлекательным)
    { 
      name: "Альфа-Банк", 
      rate: "от 5.9%", 
      type: "🔥 ХИТ: Одобрение 99%", // Яркая плашка, мимо которой не пройти
      link: "https://pxl.leads.su/click/88df03d6bfd16fa3ee23a8d5c3410c25" 
    },
    // 2. ВТБ
    { 
      name: "ВТБ", 
      rate: "от 6.0%", 
      type: "Семейная ипотека", 
      link: "ВСТАВИТЬ_ССЫЛКУ_ВТБ_ИПОТЕКА" 
    },
    // 3. Сбербанк (Для солидности, без партнерки)
    { 
      name: "Сбербанк", 
      rate: "от 8.0%", 
      type: "Новостройка", 
      link: "https://www.sberbank.com/ru/person/credits/home" 
    },
    // 4. ПСБ или Газпромбанк
    { 
      name: "ПСБ", 
      rate: "от 8.5%", 
      type: "Вторичное жилье", 
      link: "ВСТАВИТЬ_ССЫЛКУ_ПСБ_ИПОТЕКА" 
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="mortgage">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <span className="bg-indigo-100 text-indigo-600 font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-4 inline-block">
            Квартира мечты
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Ипотека без лишних нервов
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Собрали льготные программы и актуальные ставки от ведущих банков.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mortgageOffers.map((offer, index) => (
            <div key={index} className="border border-gray-100 bg-gray-50 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group">
              <div>
                <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-gray-900">{offer.name}</h3>
                  <span className="bg-white border border-gray-200 text-indigo-600 text-[10px] px-3 py-1 rounded-full font-black uppercase whitespace-nowrap">
                    {offer.type}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-1 font-medium">Ставка в год</p>
                <p className="text-3xl font-black text-gray-900 mb-6">{offer.rate}</p>
              </div>
              <a
                href={offer.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-900 hover:bg-indigo-600 text-white font-bold py-3.5 rounded-xl transition-colors text-center block shadow-sm"
              >
                Посмотреть условия &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}