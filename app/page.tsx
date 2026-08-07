import Header from '@/components/Header';
import CurrencyWidget from '@/components/CurrencyWidget';
import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import CreditCards from '@/components/CreditCards';
import AutoLoans from '@/components/AutoLoans';
import Mortgage from '@/components/Mortgage';
import BankruptcySection from '@/components/BankruptcySection';
import Articles from '@/components/Articles'; // Твой файл Articles.tsx
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import NewsFeed from './NewsFeed';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CurrencyWidget />
      <NewsFeed />
      <Hero />
      <Calculator />
      <CreditCards />
      <AutoLoans />
      <Mortgage />
      <BankruptcySection />
      {/* Просто вызываем компонент, он сам возьмет данные из массива */}
      <Articles />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
