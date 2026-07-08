import Header from '../components/Header';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Compare from '../components/Compare';
import Scenarios from '../components/Scenarios';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Calculator />
        <Compare />
        <Scenarios />
        <Articles />
      </main>
      <Footer />
    </>
  );
}