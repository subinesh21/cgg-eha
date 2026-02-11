'use client';

import TopBar from '@/components/sections/TopBar';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-white font-body">
      <TopBar />
      <Header />
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-2xl lg:text-3xl font-heading font-semibold text-eco-text mb-3">
              Our Story
            </h1>
            <p className="text-eco-muted max-w-2xl mx-auto">
              Discover the journey behind our commitment to sustainable living and eco-friendly products.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
