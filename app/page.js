'use client';

import { useState, useEffect } from 'react';
import TopBar from '@/components/sections/TopBar';
import Header from '@/components/sections/Header';
import HeroSlider from '@/components/sections/HeroSlider';
import CategoryIcons from '@/components/sections/CategoryIcons';
import BiocompositesFeature from '@/components/sections/BiocompositesFeature';
import SustainableCollection from '@/components/sections/SustainableCollection';
import HappinessSection from '@/components/sections/HappinessSection';
import ProductsCarousel from '@/components/sections/ProductsCarousel';
import ARAIStats from '@/components/sections/ARAIStats';
import NaturalProducts from '@/components/sections/NaturalProducts';
import CropWasteMaterials from '@/components/sections/CropWasteMaterials';
import Testimonials from '@/components/sections/Testimonials';
import Awards from '@/components/sections/Awards';
import BlogSection from '@/components/sections/BlogSection';
import Footer from '@/components/sections/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-body">
      <TopBar />
      <Header />
      <main>
        <HeroSlider />
        <CategoryIcons />
        <BiocompositesFeature />
        <SustainableCollection />
        <HappinessSection />
        <ProductsCarousel />
        <ARAIStats />
        <NaturalProducts />
        <CropWasteMaterials />
        <Testimonials />
        <Awards />
        <BlogSection />
      </main>
      <Footer />
      <ScrollToTop visible={showScrollTop} />
    </div>
  );
}
