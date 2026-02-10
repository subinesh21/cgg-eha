'use client';

import TopBar from '@/components/sections/TopBar';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ProductCard } from '@/components/sections/ProductsCarousel';

const drinkwareProducts = [
  {
    id: 111,
    name: 'Mr & Mrs Coffee Mugs for Couple | Set of 2 | 300 ml',
    price: 563,
    originalPrice: 849,
    image: '/images/category-drinkware.jpg',
    colors: ['Azure', 'Sand Castle'],
    badge: 'sale',
  },
  {
    id: 112,
    name: 'Classic Mug 300 ml | Unbreakable Mugs with Rice Husk & Bamboo',
    price: 250,
    originalPrice: 399,
    image: '/images/category-drinkware.jpg',
    colors: ['Pink', 'Blue', 'Green', 'Cream'],
    badge: 'hot',
  },
  {
    id: 113,
    name: 'Cutting Chai Cups With Stand | Set of 6',
    price: 771,
    originalPrice: 1498,
    image: '/images/product-chai-cups.jpg',
    colors: ['Azure', 'Celeste', 'Charcoal', 'Coffee', 'Coral', 'Fern'],
    badge: 'hot',
  },
  {
    id: 114,
    name: 'Everyday Tumbler Glasses | Set of 4 | 300 ml',
    price: 599,
    originalPrice: 999,
    image: '/images/category-drinkware.jpg',
    colors: ['Azure', 'Innocent', 'Sand Castle'],
    badge: null,
  },
];

export default function DrinkwarePage() {
  return (
    <div className="min-h-screen bg-white font-body">
      <TopBar />
      <Header />
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-2xl lg:text-3xl font-heading font-semibold text-eco-text mb-3">
              Drinkware
            </h1>
            <p className="text-eco-muted max-w-2xl mx-auto">
              Unbreakable, lightweight drinkware for everyday use, made from crop waste-based
              biocomposites.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {drinkwareProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

