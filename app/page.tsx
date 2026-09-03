import Header from '@/components/Header';
import CurrencyWidget from '@/components/CurrencyWidget';
import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator'; // Твой старый простой калькулятор
import DebitCards from '@/components/DebitCards';
import CreditCards from '@/components/CreditCards';
import AutoLoans from '@/components/AutoLoans';
import MortgageCalculator from '@/components/MortgageCalculator'; // ⚡ НОВЫЙ ИПОТЕЧНЫЙ КАЛЬКУЛЯТОР
import Mortgage from '@/components/Mortgage';
import BankruptcySection from '@/components/BankruptcySection';
import MfoList from '@/components/MfoList';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CurrencyWidget />
      <Hero />
      
      {/* 1. Блок обычных кредитов и карт */}
      <Calculator />
      <DebitCards />
      <CreditCards />
      <AutoLoans />
      
      {/* 2. Блок Ипотеки (с умным калькулятором) */}
      <MortgageCalculator />
      <Mortgage />
      
      {/* 3. Блок для сложных ситуаций */}
      <BankruptcySection />
      <MfoList />
      
      <Articles />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
