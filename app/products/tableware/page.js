'use client';

import TopBar from '@/components/sections/TopBar';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ProductCard } from '@/components/sections/ProductsCarousel';

const tablewareProducts = [
  {
    id: 121,
    name: 'Pasta Bowl 750 ml | Set of 6 | With Spoon',
    price: 720,
    originalPrice: 1276,
    image: '/images/product-pasta-bowls.jpg',
    colors: ['Azure', 'Celeste', 'Innocent', 'Sand Castle', 'Tortilla'],
    badge: 'sale',
  },
  {
    id: 122,
    name: 'Snack Plates 8 inch | Set of 4 | Unbreakable Plates',
    price: 460,
    originalPrice: 579,
    image: '/images/hero-slide-3.jpg',
    colors: ['Azure', 'Celeste', 'Charcoal', 'Coffee', 'Coral'],
    badge: 'hot',
  },
  {
    id: 123,
    name: 'Soup Bowl 250 ml | Set of 6 | With Spoon',
    price: 714,
    originalPrice: 1149,
    image: '/images/product-pasta-bowls.jpg',
    colors: ['Azure', 'Celeste', 'Innocent', 'Multicolor', 'Sand Castle'],
    badge: null,
  },
  {
    id: 124,
    name: 'Slow Feeding Pet Bowls 800 ml | Unbreakable Bowls',
    price: 432,
    originalPrice: 650,
    image: '/images/category-tableware.jpg',
    colors: ['Azure', 'Tortilla'],
    badge: null,
  },
];

export default function TablewarePage() {
  return (
    <div className="min-h-screen bg-white font-body">
      <TopBar />
      <Header />
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-2xl lg:text-3xl font-heading font-semibold text-eco-text mb-3">
              Tableware
            </h1>
            <p className="text-eco-muted max-w-2xl mx-auto">
              Beautiful, durable tableware for everyday meals, made with circular materials that are
              safe for your family.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {tablewareProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

