
import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CheckoutForm from '../components/checkout/CheckoutForm';
import BasketSummary from '../components/checkout/BasketSummary';
import PromoBanner from '../components/checkout/PromoBanner';
import { useCart } from '@/contexts/CartContext';

const Checkout = () => {
  const { subtotal } = useCart();
  const [orderTotal, setOrderTotal] = useState(subtotal + 3.95); // Subtotal + shipping
  const [minimumOrder] = useState(25.00);
  const [isValidOrder, setIsValidOrder] = useState(false);

  // Check if cart meets minimum requirement on component mount
  useEffect(() => {
    checkOrderValidity(orderTotal);
  }, [orderTotal]);

  // Check if order meets minimum requirement
  const checkOrderValidity = (total: number) => {
    const isValid = total >= minimumOrder;
    setIsValidOrder(isValid);
    return isValid;
  };

  return (
    <div className="flex flex-col min-h-screen bg-montys-beige">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Promo Banner */}
        <PromoBanner 
          orderTotal={orderTotal} 
          minimumOrder={minimumOrder} 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Checkout Form - Left side (2 cols) */}
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>
          
          {/* Basket Summary - Right side (1 col) */}
          <div className="lg:col-span-1">
            <BasketSummary 
              orderTotal={orderTotal}
              setOrderTotal={setOrderTotal}
              checkOrderValidity={checkOrderValidity}
            />
          </div>
        </div>
        
        {/* Complete Order Button */}
        <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center justify-center mb-4 text-sm text-gray-600">
            <input 
              type="checkbox" 
              id="newsletter" 
              className="mr-2" 
            />
            <label htmlFor="newsletter">Sign me up to receive email updates and news (optional)</label>
          </div>
          
          <button 
            className={`w-full md:w-1/2 lg:w-1/3 py-3 px-6 rounded text-white font-bold text-lg
              ${isValidOrder ? 'bg-montys-coral hover:bg-opacity-90' : 'bg-gray-400 cursor-not-allowed'}`}
            disabled={!isValidOrder}
          >
            COMPLETE ORDER
          </button>
          
          <div className="mt-6 flex items-center">
            <a href="/" className="text-montys-green hover:underline text-sm flex items-center">
              <span className="mr-2">←</span> Continue Shopping
            </a>
          </div>
          
          <div className="mt-6 flex items-center justify-center text-sm text-gray-600">
            <Lock size={16} className="mr-2" />
            <span>Secure payment with high level SSL encryption</span>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
