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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent hydration mismatch by ensuring consistent rendering
  if (!isClient) {
    return (
      <div className="min-h-screen bg-white font-body">
        {/* Empty shell for server-side rendering */}
        <div className="invisible">
          <TopBar />
          <Header />
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="animate-pulse">
            <div className="w-12 h-12 bg-green-500 rounded-full mx-auto"></div>
            <div className="mt-4 text-center text-gray-600">Loading CGG...</div>
          </div>
        </div>
      </div>
    );
  }

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