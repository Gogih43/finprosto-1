import Header from '../components/Header';
import Hero from '../components/Hero';
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