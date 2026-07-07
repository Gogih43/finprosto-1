import Header from '../components/Header';
import Hero from '../components/Hero';
import Results from '../components/Results';
import Calculator from '../components/Calculator'; // 👈 Встал на свое место
import Compare from '../components/Compare';       // 👈 Кредит или лизинг
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
        
        {/* 1. Мы уже сравнили рынок */}
        <Results /> 
        
        {/* 2. Калькулятор: считаем платеж */}
        <Calculator /> 
        
        {/* 3. Что лучше: кредит или лизинг */}
        <Compare /> 
        
        <Scenarios />
        <Debts />
        <Articles />
      </main>
      <Footer />
    </>
  );
}