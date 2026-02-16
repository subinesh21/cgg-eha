'use client';

import TopBar from '@/components/sections/TopBar';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ProductCard } from '@/components/sections/ProductsCarousel';

const giftingProducts = [
  {
    id: 141,
    name: 'Couple Mug Gift Set | Mr & Mrs | 300 ml',
    price: 899,
    originalPrice: 1299,
    image: '/images/category-drinkware.jpg',
    colors: ['Azure', 'Sand Castle'],
    badge: 'sale',
  },
  {
    id: 142,
    name: 'Garden Lovers Gift Box | Planters & Tools',
    price: 1499,
    originalPrice: 2199,
    image: '/images/category-gardenware.jpg',
    hoverImage: '/images/product-pasta-bowls.jpg',
    colors: ['Fern', 'Sand Castle'],
    badge: 'hot',
  },
  {
    id: 143,
    name: 'Tableware Gift Hamper | Bowls & Snack Plates',
    price: 1599,
    originalPrice: 2499,
    image: '/images/product-pasta-bowls.jpg',
    colors: ['Azure', 'Celeste', 'Innocent'],
    badge: null,
  },
  {
    id: 144,
    name: 'Kitchen Essentials Storage Gift Set',
    price: 1399,
    originalPrice: 2199,
    image: '/images/product-storage-jars.jpg',
    colors: ['Innocent', 'Sand Castle', 'Tortilla'],
    badge: null,
  },
];

export default function GiftingPage() {
  return (
    <div className="min-h-screen bg-white font-body">
      <TopBar />
      <Header />
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-2xl lg:text-3xl font-heading font-semibold text-eco-text mb-3">
              Two
            </h1>
            <p className="text-eco-muted max-w-2xl mx-auto">
              Thoughtful, earth friendly gifting ideas for housewarmings, festivals, and everyday
              celebrations.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {giftingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

