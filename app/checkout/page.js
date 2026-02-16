'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, CreditCard, MapPin, Phone, User, CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cartItems, cartTotal, placeOrder } = useCart();
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(true);
  
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
    phone: '',
  });

  // Fetch user profile with saved shipping address
  useEffect(() => {
    const fetchProfile = async () => {
      if (user?.id) {
        try {
          const response = await fetch(`/api/user/profile?userId=${user.id}`);
          const data = await response.json();
          
          if (response.ok && data.user?.shippingAddress?.fullName) {
            // Use saved shipping address
            setShippingInfo({
              fullName: data.user.shippingAddress.fullName,
              address: data.user.shippingAddress.address,
              city: data.user.shippingAddress.city,
              state: data.user.shippingAddress.state,
              zipCode: data.user.shippingAddress.zipCode,
              country: data.user.shippingAddress.country || 'India',
              phone: data.user.shippingAddress.phone,
            });
          } else {
            // Use user name as default if no saved address
            setShippingInfo(prev => ({
              ...prev,
              fullName: user.name || '',
            }));
          }
        } catch (error) {
          console.error('Error fetching profile:', error);
          setShippingInfo(prev => ({
            ...prev,
            fullName: user.name || '',
          }));
        } finally {
          setLoadingProfile(false);
        }
      }
    };

    fetchProfile();
  }, [user?.id]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/account');
    }
  }, [isAuthenticated, router]);

  // Redirect to home if cart is empty
  if (cartItems.length === 0) {
    router.push('/orders');
    return null;
  }

  const validateForm = () => {
    const requiredFields = ['fullName', 'address', 'city', 'state', 'zipCode', 'phone'];
    for (const field of requiredFields) {
      if (!shippingInfo[field]?.trim()) {
        return false;
      }
    }
    
    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(shippingInfo.phone)) {
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Please fill in all required fields with valid information');
      return;
    }

    setIsPlacingOrder(true);
    
    const orderSuccess = await placeOrder({
      items: cartItems,
      totalAmount: cartTotal,
      shippingAddress: shippingInfo,
      paymentMethod: 'cod',
    }, {
      id: user.id,
      name: user.name,
      email: user.email,
    });

    setIsPlacingOrder(false);
    
    if (orderSuccess) {
      router.push('/orders/success');
    }
  };

  const handleInputChange = (e) => {
    const { name, value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/products" 
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-2">Complete your purchase with Cash on Delivery</p>
          {shippingInfo.fullName && !loadingProfile && (
            <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Shipping details auto-filled from your profile
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.productId}-${item.color}`} className="flex items-center py-4 border-b border-gray-100 last:border-b-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      {item.color && (
                        <p className="text-sm text-gray-500">Color: {item.color}</p>
                      )}
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  * All prices include applicable taxes
                </p>
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipping Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="fullName"
                      value={shippingInfo.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleInputChange}
                      placeholder="10-digit mobile number"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      required
                      pattern="[0-9]{10}"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      placeholder="Street address, apartment, suite, etc."
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={shippingInfo.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={shippingInfo.country}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-3">Payment Method</h3>
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <CreditCard className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium text-blue-900">Cash on Delivery</p>
                      <p className="text-sm text-blue-700">Pay when your order is delivered</p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isPlacingOrder || !validateForm()}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPlacingOrder ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing Order...
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      Place Order (₹{cartTotal.toFixed(2)})
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}