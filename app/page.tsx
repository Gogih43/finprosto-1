import Header from '../components/Header';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Results from '../components/Results';
import Compare from '../components/Compare';
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
        <Calculator />
        <Results />
        <Compare />
        <Scenarios />
        <Debts />
        <Articles />
      </main>
      <Footer />
    </>
  );
}