import Header from '@/components/Header';
import CurrencyWidget from '@/components/CurrencyWidget'; // <--- НОВЫЙ ИМПОРТ
import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import CreditCards from '@/components/CreditCards';
import AutoLoans from '@/components/AutoLoans';
import Mortgage from '@/components/Mortgage';
import BankruptcySection from '@/components/BankruptcySection';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import NewsFeed from '../components/NewsFeed';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CurrencyWidget /> {/* <--- ВСТАВИЛИ ПОЛОСКУ С ВАЛЮТАМИ */}
      <Hero />
      <NewsFeed />
      <Calculator />
      <CreditCards />
      <AutoLoans />
      <Mortgage />
      <BankruptcySection />
      <Articles />
      <Footer />
      <ScrollToTop />
    </main>
  );
}