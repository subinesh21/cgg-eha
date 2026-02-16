'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface CartItem {
  productId: string | number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color: string | null;
}

export interface OrderData {
  items: CartItem[];
  totalAmount: number;
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
  };
  paymentMethod: 'cod' | 'online';
}

interface CartContextValue {
  cartItems: CartItem[];
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: { id: string | number; name: string; price: number; image: string }, quantity?: number, color?: string | null) => void;
  removeFromCart: (productId: string | number, color?: string | null) => void;
  updateQuantity: (productId: string | number, quantity: number, color?: string | null) => void;
  clearCart: () => void;
  placeOrder: (orderData: OrderData, user: { id: string; name: string; email: string }) => Promise<boolean>;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product: { id: string | number; name: string; price: number; image: string }, quantity = 1, color: string | null = null) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.productId === product.id && item.color === color
      );
      if (existingItem) {
        return prev.map((item) =>
          item.productId === product.id && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          color,
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback((productId: string | number, color: string | null = null) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.productId === productId && item.color === color))
    );
  }, []);

  const updateQuantity = useCallback((productId: string | number, quantity: number, color: string | null = null) => {
    if (quantity <= 0) {
      setCartItems((prev) =>
        prev.filter((item) => !(item.productId === productId && item.color === color))
      );
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId && item.color === color ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const placeOrder = useCallback(async (
    orderData: OrderData,
    user: { id: string; name: string; email: string }
  ): Promise<boolean> => {
    try {
      const response = await fetch('/api/orders/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user,
          items: orderData.items,
          totalAmount: orderData.totalAmount,
          shippingAddress: orderData.shippingAddress,
          paymentMethod: orderData.paymentMethod,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Clear cart after successful order
        clearCart();
        return true;
      } else {
        console.error('Order failed:', data.message);
        return false;
      }
    } catch (error) {
      console.error('Error placing order:', error);
      return false;
    }
  }, [clearCart]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}
