
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Products from '@/components/Products';
import MealBoxes from '@/components/MealBoxes';
import StarterBox from '@/components/StarterBox';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <MealBoxes />
        <StarterBox />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
