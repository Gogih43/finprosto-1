'use client';

export default function Hero() {
  // Функция для плавного скролла к нашему рабочему калькулятору
  const scrollToCalculator = () => {
    const calc = document.getElementById('calculator');
    if (calc) {
      calc.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white pt-24 pb-32 overflow-hidden">
      {/* Легкий декоративный фон (градиентные пятна, чтобы выглядело дорого) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        
        {/* Бейдж доверия */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-sm mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </span>
          Ставки обновлены сегодня
        </div>

        {/* Главный заголовок */}
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
          Честный подбор <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            кредитов и ипотеки
          </span>
        </h1>

        {/* Тот самый текст, но красиво оформленный */}
        <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed max-w-3xl mx-auto">
          Не рекламные ставки. Реальные условия. Мы анализируем сотни скрытых предложений банков, чтобы найти лучшее решение именно для вас.
        </p>

        {/* Одна огромная кнопка-призыв к действию */}
        <button 
          onClick={scrollToCalculator}
          className="bg-gray-900 text-white font-bold py-5 px-12 rounded-2xl text-xl shadow-xl shadow-gray-900/20 hover:bg-indigo-600 hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300"
        >
          Рассчитать платеж бесплатно
        </button>

        {/* Триггеры безопасности под кнопкой */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm font-medium text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Без влияния на кредитную историю
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Не собираем ваши данные
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Данные по лицензии ЦБ РФ
          </div>
        </div>

      </div>
    </section>
  );
}