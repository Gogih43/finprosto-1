import Header from '../components/Header';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Tactics from '../components/Tactics'; // 👈 Добавили Симулятор тактик
import Compare from '../components/Compare'; // 👈 Наш Лизинг
import Articles from '../components/Articles';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Calculator />
        <Tactics />     {/* Сначала человек играет с тактиками */}
        <Compare />     {/* Потом бизнесмены видят лизинг */}
        <Articles />
      </main>
      <Footer />
    </>
  );
}