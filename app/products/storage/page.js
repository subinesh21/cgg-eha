'use client';

import TopBar from '@/components/sections/TopBar';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ProductCard } from '@/components/sections/ProductsCarousel';

const storageProducts = [
  {
    id: 131,
    name: 'Kitchen Storage Jars & Containers | Set of 3 | 800 ml',
    price: 695,
    originalPrice: 1158,
    image: '/images/product-storage-jars.jpg',
    colors: ['Azure', 'Celeste', 'Innocent', 'Sand Castle'],
    badge: 'hot',
  },
  {
    id: 132,
    name: 'Terravo Storage Containers For Kitchen | 2200 ml, 1200 ml',
    price: 1340,
    originalPrice: 2233,
    image: '/images/category-storage.jpg',
    colors: ['Azure', 'Celeste', 'Innocent'],
    badge: 'sale',
  },
  {
    id: 133,
    name: 'Pantry Storage Jar Set | Pack of 4 | Airtight Lids',
    price: 899,
    originalPrice: 1499,
    image: '/images/product-storage-jars.jpg',
    colors: ['Innocent', 'Sand Castle', 'Tortilla'],
    badge: null,
  },
  {
    id: 134,
    name: 'Bathroom Accessories Storage Set | Pack of 3',
    price: 674,
    originalPrice: 1225,
    image: '/images/product-storage-jars.jpg',
    colors: ['Cream', 'White'],
    badge: null,
  },
];

export default function StoragePage() {
  return (
    <div className="min-h-screen bg-white font-body">
      <TopBar />
      <Header />
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-2xl lg:text-3xl font-heading font-semibold text-eco-text mb-3">
              Storage
            </h1>
            <p className="text-eco-muted max-w-2xl mx-auto">
              Smart storage solutions for a clutter-free, earth friendly kitchen and home.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {storageProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

