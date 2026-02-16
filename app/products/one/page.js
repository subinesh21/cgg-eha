'use client';

import TopBar from '@/components/sections/TopBar';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ProductCard } from '@/components/sections/ProductsCarousel';

const gardenwareProducts = [
  {
    id: 101,
    name: 'Romano 7.5 inch Planters | Set of 2 | Home Decor',
    price: 839,
    originalPrice: 1525,
    image: '/images/category-gardenware.jpg',
    hoverImage:  '/images/product-planters.jpg',
    colors: ['Innocent', 'Coral', 'Fern'],
    badge: 'sale',
  },
  {
    id: 102,
    name: 'Linea 5.5 Inch Planters | Set of 6 | Bamboo Pots',
    price: 751,
    originalPrice: 1332,
    image: '/images/product-planters.jpg',
    hoverImage: '/images/category-gardenware.jpg',
    colors: ['Coral', 'Fern', 'Sand Castle'],
    badge: 'hot',
  },
  {
    id: 103,
    name: 'Balcony Railing Planters | Set of 3 | Earth Friendly',
    price: 899,
    originalPrice: 1499,
    image: '/images/category-gardenware.jpg',
    hoverImage:'/images/product-planters.jpg',
    colors: ['Azure', 'Fern', 'Sand Castle'],
    badge: null,
  },
  {
    id: 104,
    name: 'Herb Planter Set | Pack of 4 | Kitchen Garden',
    price: 699,
    originalPrice: 1199,
    image: '/images/product-planters.jpg',
    hoverImage: '/images/category-gardenware.jpg',
    colors: ['Innocent', 'Coral', 'Tortilla'],
    badge: 'sale',
  },
];

export default function GardenwarePage() {
  return (
    <div className="min-h-screen bg-white font-body">
      <TopBar />
      <Header />
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-2xl lg:text-3xl font-heading font-semibold text-eco-text mb-3">
              One
            </h1>
            <p className="text-eco-muted max-w-2xl mx-auto">
              Earth friendly gardenware made from crop waste-based biocomposites to green your home
              and balcony.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {gardenwareProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}