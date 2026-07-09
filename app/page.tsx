import Header from '../components/Header';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Tactics from '../components/Tactics'; 
import Compare from '../components/Compare'; 
import BankruptcySection from '../components/BankruptcySection';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop'; // 👈 Импортируем лифт

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Calculator />
        <Tactics />
        <Compare />
        <BankruptcySection />
        <Articles />
      </main>
      <Footer />
      
      {/* 👈 Ставим лифт. Он будет плавать поверх всех блоков */}
      <ScrollToTop /> 
    </>
  );
}
