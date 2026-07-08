'use client';

export default function Articles() {
  // Массив с нашими экспертными статьями (пока захардкожен, позже можно вынести в БД)
  const articles = [
    {
      id: 1,
      title: "Рефинансирование в 2024: Когда действительно выгодно объединять кредиты?",
      excerpt: "Разбираем на реальных примерах, в каких случаях рефинансирование спасет ваш бюджет, а когда — загонит в еще большие долги.",
      category: "Лайфхаки",
      readTime: "5 мин чтения",
      date: "12 мая 2024",
      imageGrad: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Кредитная история: Как узнать свой рейтинг и поднять его за 3 месяца",
      excerpt: "Пошаговая инструкция по легальному улучшению скорингового балла. Что делать, если банки постоянно отказывают?",
      category: "База знаний",
      readTime: "7 мин чтения",
      date: "08 мая 2024",
      imageGrad: "from-emerald-500 to-teal-600"
    },
    {
      id: 3,
      title: "Срок или платеж? Как выгоднее гасить ипотеку досрочно",
      excerpt: "Математический расчет досрочного погашения. Развеиваем главный миф ипотечников с помощью кредитного калькулятора.",
      category: "Ипотека",
      readTime: "6 мин чтения",
      date: "02 мая 2024",
      imageGrad: "from-orange-400 to-red-500"
    },
    {
      id: 4,
      title: "Стоит ли брать кредит на закрытие микрозаймов (МФО)?",
      excerpt: "Как выбраться из долговой ямы микрокредитных организаций и почему обычные банки неохотно дают деньги должникам МФО.",
      category: "Долги",
      readTime: "4 мин чтения",
      date: "28 апреля 2024",
      imageGrad: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-white" id="articles">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Финансовая грамотность
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl">
              Наши эксперты разбирают сложные финансовые вопросы простым языком. Помогаем экономить деньги и не попадать в ловушки банков.
            </p>
          </div>
          <button className="hidden md:block text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
            Все статьи &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Имитация картинки с помощью красивого градиента (чтобы не было битых ссылок на фото) */}
              <div className={`h-48 w-full bg-gradient-to-br ${article.imageGrad} relative overflow-hidden`}>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>
                {/* Легкий декоративный паттерн */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white opacity-20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-gray-400 font-medium mb-3">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-3">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <span className="text-indigo-600 font-semibold text-sm group-hover:underline">
                    Читать полностью
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <button className="mt-10 w-full md:hidden bg-gray-100 text-gray-800 font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">
          Все статьи
        </button>
      </div>
    </section>
  );
}