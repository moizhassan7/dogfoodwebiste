
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MinusCircle, PlusCircle, Lock, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface BasketSummaryProps {
  orderTotal: number;
  setOrderTotal: (total: number) => void;
  checkOrderValidity: (total: number) => boolean;
}

const BasketSummary = ({ orderTotal, setOrderTotal, checkOrderValidity }: BasketSummaryProps) => {
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  
  const { cartItems, updateQuantity, removeFromCart, subtotal } = useCart();
  const shippingCost = 3.95;
  const total = subtotal + shippingCost;
  
  // Update the parent component with new total
  React.useEffect(() => {
    setOrderTotal(total);
    checkOrderValidity(total);
  }, [total, setOrderTotal, checkOrderValidity]);
  
  const handleQuantityChange = (id: number, selectedWeight: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, selectedWeight, newQuantity);
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
      
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Your basket is empty.</p>
      ) : (
        <>
          {/* Product items */}
          {cartItems.map((item) => (
            <div key={`${item.id}-${item.selectedWeight}`} className="flex items-center border-b border-gray-100 pb-4 mb-4">
              <div className="w-16 h-16 mr-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="font-medium text-left">{item.title} - {item.selectedWeight}</h3>
                
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.selectedWeight, item.quantity - 1)}
                      className="text-gray-500 hover:text-montys-coral"
                      disabled={item.quantity <= 1}
                    >
                      <MinusCircle size={16} />
                    </button>
                    
                    <span className="mx-2">{item.quantity}</span>
                    
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.selectedWeight, item.quantity + 1)}
                      className="text-gray-500 hover:text-montys-coral"
                    >
                      <PlusCircle size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="font-medium mr-3">{item.selectedPrice}</div>
                    <button
                      onClick={() => removeFromCart(item.id, item.selectedWeight)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
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
        </>
      )}
      
      {/* Help section */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="font-medium text-left">Need help?</p>
        <p className="text-sm text-left">Call us on <a href="tel:01747859911" className="text-montys-coral hover:underline">01747 859911</a></p>
      </div>
      
      {/* Payment options */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        <img src="https://cdn.shopify.com/s/files/1/0266/1371/2059/files/visa_68x43_5dd0e643-35c9-416c-8ef5-36eff410b6e7_x32.png?v=1614116471" alt="Visa" className="h-6" />
        <img src="https://cdn.shopify.com/s/files/1/0266/1371/2059/files/mastercard_68x43_cb187ee3-47ef-491c-8225-ab1a25daf942_x32.png?v=1614116469" alt="Mastercard" className="h-6" />
        <img src="https://cdn.shopify.com/s/files/1/0266/1371/2059/files/paypal_68x43_197d57d3-c680-4edf-98f9-92bfbce7a215_x32.png?v=1614116470" alt="PayPal" className="h-6" />
        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/google_pay-c66a29c63facf2053bf69352982c958e.svg" alt="Google Pay" className="h-6" />
        <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c484e2bd45d501b681e9d67d0a24d3947f7ac0462443b43064f5b.svg" alt="Apple Pay" className="h-6" />
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
