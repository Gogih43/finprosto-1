import Header from '../components/Header';
import Hero from '../components/Hero';
import Results from '../components/Results';
import Compare from '../components/Compare';
import Calculator from '../components/Calculator'; // 👈 Переместили сюда
import Scenarios from '../components/Scenarios';
import Debts from '../components/Debts';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Results />  {/* Показываем актуальные ставки */}
        <Compare />  {/* Сравниваем условия */}
        
        <Calculator /> {/* 👈 Теперь считаем платеж для конкретного юзера */}
        
        <Scenarios />
        <Debts />
        <Articles />
      </main>
      <Footer />
    </>
  );
}