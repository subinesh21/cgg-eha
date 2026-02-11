import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronDown } from 'lucide-react';

const menuItems = [
  {
    name: 'Shop',
    href: '#',
    children: [
      { name: 'Gardenware', href: '/products/gardenware' },
      { name: 'Drinkware', href: '/products/drinkware' },
      { name: 'Tableware', href: '/products/tableware' },
      { name: 'Storage', href: '/products/storage' },
      { name: 'Gifting', href: '/products/gifting' },
      { name: 'Bestsellers', href: '/products/best-sellers' },
      { name: 'New arrivals', href: '/products/new-arrivals' },
    ],
  },
  {
    name: 'About',
    href: '#',
    children: [
      { name: 'Our Story', href: '/about/our-story' },
      { name: 'Our Promise', href: '/about/our-promise' },
      { name: 'Our Principles', href: '/about/our-principles' },
      { name: 'Our Material', href: '/about/our-material' },
    ],
  },
  {
    name: 'Bulk',
    href: '#',
    children: [
      { name: 'Eha B2B Home', href: '/bulk/b2b-home' },
      { name: 'Garden Collection', href: '/bulk/garden-collection' },
      { name: 'Home Collection', href: '/bulk/home-collection' },
    ],
  },
  {
    name: 'More',
    href: '#',
    children: [
      { name: 'Contact', href: '/contact' },
      { name: 'Blogs', href: '/blogs' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
];

export default function MobileMenu({ isOpen, onClose }) {
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-0 left-0 h-full w-70 max-w-sm bg-white z-50 lg:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="text-2xl font-heading font-bold text-primary">
                <span className="text-eco-text">C</span>GG
              </div>
              <button
                onClick={onClose}
                className="p-2 text-eco-muted hover:text-eco-text transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-4">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100">
                  <button
                    onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                    className="w-full flex items-center justify-between px-6 py-4 text-eco-text hover:text-primary transition-colors"
                  >
                    <span className="text-base font-medium">{item.name}</span>
                    {expandedItem === item.name ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedItem === item.name && item.children && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50"
                      >
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-6 py-3 text-sm text-eco-muted hover:text-primary transition-colors"
                            onClick={onClose}
                          >
                            {child.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 p-6 space-y-3">
              <a
                href="#"
                className="block w-full py-3 text-center border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors"
              >
                Login / Register
              </a>
              <a
                href="#"
                className="block w-full py-3 text-center bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
