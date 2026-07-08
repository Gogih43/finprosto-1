import Header from '../components/Header';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Compare from '../components/Compare';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Главный экран */}
        <Hero />
        
        {/* Калькулятор со ставками */}
        <Calculator />
        
        {/* Интерактивный симулятор тактик (наш новый Compare) */}
        <Compare />
        
        {/* Блок со статьями */}
        <Articles />
      </main>
      <Footer />
    </>
  );
}