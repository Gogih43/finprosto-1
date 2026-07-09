import Header from '../components/Header';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Tactics from '../components/Tactics'; 
import Compare from '../components/Compare'; 
import BankruptcySection from '../components/BankruptcySection'; // 👈 Добавили
import Articles from '../components/Articles';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Calculator />
        <Tactics />
        <Compare />
        <BankruptcySection /> {/* 👈 Темный мощный блок с Квизом */}
        <Articles />
      </main>
      <Footer />
    </>
  );
}