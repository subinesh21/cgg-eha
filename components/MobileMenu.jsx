import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronDown } from 'lucide-react';

const menuItems = [
  {
    name: 'Shop',
    href: '#',
    children: [
      { name: 'Gardenware', href: '#' },
      { name: 'Drinkware', href: '#' },
      { name: 'Tableware', href: '#' },
      { name: 'Storage', href: '#' },
      { name: 'Petcare', href: '#' },
      { name: 'Gifting', href: '#' },
      { name: 'Bestsellers', href: '#' },
      { name: 'New arrivals', href: '#' },
    ],
  },
  {
    name: 'About',
    href: '#',
    children: [
      { name: 'Our Story', href: '#' },
      { name: 'Our Promise', href: '#' },
      { name: 'Our Principles', href: '#' },
      { name: 'Our Material', href: '#' },
    ],
  },
  {
    name: 'Bulk',
    href: '#',
    children: [
      { name: 'Eha B2B Home', href: '#' },
      { name: 'Garden Collection', href: '#' },
      { name: 'Home Collection', href: '#' },
    ],
  },
  {
    name: 'More',
    href: '#',
    children: [
      { name: 'Contact', href: '#' },
      { name: 'Blogs', href: '#' },
      { name: 'FAQ', href: '#' },
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
            className="fixed top-0 left-0 h-full w-full max-w-sm bg-white z-50 lg:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="text-2xl font-heading font-bold text-primary">
                <span className="text-eco-text">e</span>ha
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
