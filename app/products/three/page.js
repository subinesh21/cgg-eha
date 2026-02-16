'use client';

import TopBar from '@/components/sections/TopBar';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ProductCard } from '@/components/sections/ProductsCarousel';

const bestSellerProducts = [
  {
    id: 151,
    name: 'Romano 7.5 inch Planters | Set of 2 | Best Seller',
    price: 839,
    originalPrice: 1525,
    image: '/images/category-gardenware.jpg',
    colors: ['Innocent', 'Coral', 'Fern'],
    badge: 'sale',
  },
  {
    id: 152,
    name: 'Terravo Storage Containers For Kitchen | 2200 ml, 1200 ml',
    price: 1340,
    originalPrice: 2233,
    image: '/images/category-storage.jpg',
    colors: ['Azure', 'Celeste', 'Innocent'],
    badge: 'hot',
  },
  {
    id: 153,
    name: 'Classic Mug 300 ml | Unbreakable Mugs',
    price: 250,
    originalPrice: 399,
    image: '/images/category-drinkware.jpg',
    colors: ['Pink', 'Blue', 'Green', 'Cream'],
    badge: 'hot',
  },
  {
    id: 154,
    name: 'Bathroom Accessories For Home | Pack of 3',
    price: 674,
    originalPrice: 1225,
    image: '/images/product-storage-jars.jpg',
    colors: ['Cream', 'White'],
    badge: null,
  },
];

export default function BestSellersPage() {
  return (
    <div className="min-h-screen bg-white font-body">
      <TopBar />
      <Header />
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-2xl lg:text-3xl font-heading font-semibold text-eco-text mb-3">
              Three
            </h1>
            <p className="text-eco-muted max-w-2xl mx-auto">
              Our most-loved products, chosen again and again by customers across India.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {bestSellerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

