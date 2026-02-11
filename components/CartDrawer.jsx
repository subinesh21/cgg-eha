import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { imgPath } from '@/lib/paths';


export default function CartDrawer() {
  const { cartItems, cartTotal, cartCount, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-0 right-0 h-full w-70 max-w-md bg-white z-50 shadow-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-heading font-semibold text-eco-text">
                Shopping Cart ({cartCount})
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-eco-muted hover:text-eco-text transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-200 mb-4" />
                  <h3 className="text-lg font-medium text-eco-text mb-2">
                    Your cart is currently empty.
                  </h3>
                  <p className="text-sm text-eco-muted mb-6">
                    Before proceed to checkout you must add some products to your shopping cart.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
                  >
                    RETURN TO SHOP
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={`${item.productId}-${item.color}`} className="flex gap-4">
                      {/* Image */}
                      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={imgPath(item.image)}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-eco-text line-clamp-2 mb-1">
                          {item.name}
                        </h4>
                        {item.color && (
                          <p className="text-xs text-eco-muted mb-2">
                            Color: {item.color}
                          </p>
                        )}
                        <p className="text-sm font-semibold text-primary mb-2">
                          {formatPrice(item.price)}
                        </p>

                        {/* Quantity */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-gray-200 rounded-md">
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1, item.color)}
                              className="p-1 hover:bg-gray-100 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1, item.color)}
                              className="p-1 hover:bg-gray-100 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.productId, item.color)}
                            className="text-xs text-eco-muted hover:text-sale transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-100 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-eco-muted">Subtotal</span>
                  <span className="text-lg font-semibold text-eco-text">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
                <button className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors">
                  PROCEED TO CHECKOUT
                </button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}