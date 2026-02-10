'use client';

import TopBar from '@/components/sections/TopBar';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ProductCard } from '@/components/sections/ProductsCarousel';

const newArrivalProducts = [
  {
    id: 161,
    name: 'Mr & Mrs Coffee Mugs for Couple | New Arrival',
    price: 563,
    originalPrice: 849,
    image: '/images/category-drinkware.jpg',
    colors: ['Azure', 'Sand Castle'],
    badge: 'sale',
  },
  {
    id: 162,
    name: 'Slow Feeding Pet Bowls 800 ml | New Pattern',
    price: 432,
    originalPrice: 650,
    image: '/images/category-tableware.jpg',
    colors: ['Azure', 'Tortilla'],
    badge: null,
  },
  {
    id: 163,
    name: 'Snack Plates 8 inch | New Colorways | Set of 4',
    price: 460,
    originalPrice: 579,
    image: '/images/hero-slide-3.jpg',
    colors: ['Azure', 'Celeste', 'Charcoal', 'Coffee', 'Coral'],
    badge: 'hot',
  },
  {
    id: 164,
    name: 'Soup Bowl 250 ml | Festival Edition | Set of 6',
    price: 714,
    originalPrice: 1149,
    image: '/images/product-pasta-bowls.jpg',
    colors: ['Azure', 'Celeste', 'Innocent', 'Multicolor', 'Sand Castle'],
    badge: null,
  },
];

export default function NewArrivalsPage() {
  return (
    <div className="min-h-screen bg-white font-body">
      <TopBar />
      <Header />
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-2xl lg:text-3xl font-heading font-semibold text-eco-text mb-3">
              New Arrivals
            </h1>
            <p className="text-eco-muted max-w-2xl mx-auto">
              Fresh, limited-edition designs just landed, made with the same circular materials you
              love.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {newArrivalProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

