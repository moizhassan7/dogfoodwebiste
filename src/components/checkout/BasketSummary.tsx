
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MinusCircle, PlusCircle, Lock } from 'lucide-react';

interface BasketSummaryProps {
  orderTotal: number;
  setOrderTotal: (total: number) => void;
  checkOrderValidity: (total: number) => boolean;
}

const BasketSummary = ({ orderTotal, setOrderTotal, checkOrderValidity }: BasketSummaryProps) => {
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  
  const productPrice = 4.95;
  const shippingCost = 3.95;
  const subtotal = productPrice * quantity;
  const total = subtotal + shippingCost;
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    const newSubtotal = productPrice * newQuantity;
    const newTotal = newSubtotal + shippingCost;
    setOrderTotal(newTotal);
    checkOrderValidity(newTotal);
  };
  
  const handleApplyDiscount = () => {
    if (discountCode.trim() === '') return;
    
    // In a real application, you would validate the discount code with an API
    // Here we're just simulating a successful discount application
    setDiscountApplied(true);
    alert('Discount code applied successfully!');
  };
  
  return (
    <div className="bg-white p-6 rounded shadow-sm">
      <h2 className="text-lg font-bold mb-4 text-left uppercase">Your Basket</h2>
      
      {/* Product item */}
      <div className="flex items-center border-b border-gray-100 pb-4 mb-4">
        <div className="w-16 h-16 mr-4">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/91/91534.png" 
            alt="Beef Casserole" 
            className="w-full h-full object-cover rounded"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="font-medium text-left">Beef Casserole - 400G</h3>
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <button 
                onClick={() => handleQuantityChange(quantity - 1)}
                className="text-gray-500 hover:text-montys-coral"
                disabled={quantity <= 1}
              >
                <MinusCircle size={16} />
              </button>
              
              <span className="mx-2">{quantity}</span>
              
              <button 
                onClick={() => handleQuantityChange(quantity + 1)}
                className="text-gray-500 hover:text-montys-coral"
              >
                <PlusCircle size={16} />
              </button>
            </div>
            
            <div className="font-medium">£{(productPrice * quantity).toFixed(2)}</div>
          </div>
        </div>
      </div>
      
      {/* Discount code */}
      <div className="mb-6">
        <div className="flex gap-2">
          <Input 
            type="text" 
            placeholder="Enter discount code" 
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="flex-1"
          />
          <Button 
            onClick={handleApplyDiscount}
            className="bg-montys-coral hover:bg-opacity-90 text-white"
          >
            APPLY
          </Button>
        </div>
      </div>
      
      {/* Order summary */}
      <div className="space-y-3 text-sm border-t border-gray-100 pt-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">£{subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium">£{shippingCost.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Delivery Date</span>
          <span className="font-medium">Wednesday 07th May 2025</span>
        </div>
        
        <div className="flex justify-between text-base font-bold pt-3 border-t border-gray-100">
          <span>Total</span>
          <span>£{total.toFixed(2)}</span>
        </div>
      </div>
      
      {/* Help section */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="font-medium text-left">Need help?</p>
        <p className="text-sm text-left">Call us on <a href="tel:01747859911" className="text-montys-coral hover:underline">01747 859911</a></p>
      </div>
      
      {/* Payment options */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1920px-Visa_2021.svg.png" alt="Visa" className="h-6" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1920px-Mastercard_2019_logo.svg.png" alt="Mastercard" className="h-6" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/PayPal_2024.svg/1920px-PayPal_2024.svg.png" alt="PayPal" className="h-6" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1920px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-6" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1920px-Apple_Pay_logo.svg.png" alt="Apple Pay" className="h-6" />
      </div>
      
      {/* Security message */}
      <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
        <Lock size={12} className="mr-1" />
        <span>Secure payment with high level SSL encryption</span>
      </div>
    </div>
  );
};

export default BasketSummary;
