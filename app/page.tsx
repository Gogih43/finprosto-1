import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import CreditCards from '@/components/CreditCards';
import AutoLoans from '@/components/AutoLoans';
import Mortgage from '@/components/Mortgage';
import BankruptcySection from '@/components/BankruptcySection';
import Articles from '@/components/Articles';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Calculator />          {/* 1. Кредиты наличными */}
      <CreditCards />         {/* 2. Кредитные карты (Легкий продукт) */}
      <AutoLoans />           {/* 3. Автокредиты */}
      <Mortgage />            {/* 4. Ипотека */}
      <BankruptcySection />   {/* 5. Списание долгов */}
      <Articles />            {/* 6. SEO Статьи */}
      <Footer />
    </main>
  );
}