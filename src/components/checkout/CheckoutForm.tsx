
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

const CheckoutForm = () => {
  const [sameAddress, setSameAddress] = useState(true);
  const [frequency, setFrequency] = useState('one-off');
  const [createAccount, setCreateAccount] = useState(false);
  
  // Sample delivery dates
  const deliveryDates = [
    'Wednesday 07th May 2025',
    'Thursday 08th May 2025',
    'Friday 09th May 2025',
  ];
  
  return (
    <div className="space-y-8">
      {/* Your Details Section */}
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-lg font-bold mb-4 text-left uppercase">Your Details</h2>
        <div className="text-left mb-4 text-sm">
          Already have an account? <a href="/login" className="text-montys-coral hover:underline">Sign in</a>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-left block mb-2">Email address</Label>
            <Input type="email" id="email" className="w-full" />
          </div>
          
          <div className="flex items-center">
            <Checkbox 
              id="create-account" 
              checked={createAccount}
              onCheckedChange={(checked) => {
                if (typeof checked === 'boolean') setCreateAccount(checked);
              }}
              className="mr-2"
            />
            <label htmlFor="create-account" className="text-sm">
              Click here to create an account or continue below to checkout as guest
            </label>
          </div>
        </div>
      </section>
      
      {/* Delivery Address */}
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-lg font-bold mb-4 text-left uppercase">Delivery Address</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-left block mb-2">First name</Label>
            <Input type="text" id="firstName" className="w-full" />
          </div>
          
          <div>
            <Label htmlFor="lastName" className="text-left block mb-2">Last name</Label>
            <Input type="text" id="lastName" className="w-full" />
          </div>
          
          <div className="md:col-span-2">
            <Label htmlFor="street" className="text-left block mb-2">Street address</Label>
            <Input type="text" id="street" className="w-full" />
          </div>
          
          <div className="md:col-span-2">
            <Label htmlFor="flat" className="text-left block mb-2">Flat, suite, unit, etc. (optional)</Label>
            <Input type="text" id="flat" className="w-full" />
          </div>
          
          <div>
            <Label htmlFor="postcode" className="text-left block mb-2">Postcode</Label>
            <Input type="text" id="postcode" className="w-full" />
          </div>
          
          <div>
            <Label htmlFor="county" className="text-left block mb-2">County (optional)</Label>
            <Input type="text" id="county" className="w-full" />
          </div>
          
          <div>
            <Label htmlFor="city" className="text-left block mb-2">Town / City</Label>
            <Input type="text" id="city" className="w-full" />
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-left block mb-2">Phone</Label>
            <Input type="tel" id="phone" className="w-full" />
          </div>
        </div>
      </section>
      
      {/* Billing Address */}
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-lg font-bold mb-4 text-left uppercase">Billing Address</h2>
        <p className="text-left mb-4 text-sm">Is your billing address the same as the delivery address?</p>
        
        <RadioGroup 
          defaultValue={sameAddress ? "same" : "different"}
          onValueChange={(value) => setSameAddress(value === "same")}
          className="space-y-2"
        >
          <div className="flex items-center">
            <RadioGroupItem value="same" id="same-address" />
            <Label htmlFor="same-address" className="ml-2">Same as shipping address</Label>
          </div>
          
          <div className="flex items-center">
            <RadioGroupItem value="different" id="different-address" />
            <Label htmlFor="different-address" className="ml-2">Use a different billing address</Label>
          </div>
        </RadioGroup>
      </section>
      
      {/* Order Frequency */}
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-lg font-bold mb-4 text-left uppercase">How Often Do You Want Your Order?</h2>
        
        <RadioGroup 
          defaultValue={frequency}
          onValueChange={setFrequency}
          className="space-y-2"
        >
          <div className="flex items-center">
            <RadioGroupItem value="one-off" id="one-off" />
            <Label htmlFor="one-off" className="ml-2">ONE-OFF</Label>
          </div>
          
          <div className="flex items-center">
            <RadioGroupItem value="2-weeks" id="2-weeks" />
            <Label htmlFor="2-weeks" className="ml-2">EVERY 2 WEEKS</Label>
          </div>
          
          <div className="flex items-center">
            <RadioGroupItem value="4-weeks" id="4-weeks" />
            <Label htmlFor="4-weeks" className="ml-2">EVERY 4 WEEKS</Label>
          </div>
          
          <div className="flex items-center">
            <RadioGroupItem value="8-weeks" id="8-weeks" />
            <Label htmlFor="8-weeks" className="ml-2">EVERY 8 WEEKS</Label>
          </div>
        </RadioGroup>
      </section>
      
      {/* Select Delivery Date */}
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-lg font-bold mb-4 text-left uppercase">Select Your Delivery Date</h2>
        
        <div className="w-full">
          <select className="w-full border border-gray-300 rounded p-2">
            {deliveryDates.map((date, index) => (
              <option key={index} value={date}>{date}</option>
            ))}
          </select>
        </div>
      </section>
      
      {/* Delivery Options */}
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-lg font-bold mb-4 text-left uppercase">Delivery</h2>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <RadioGroupItem value="standard" id="standard" checked />
            <Label htmlFor="standard" className="ml-2">Standard Delivery</Label>
          </div>
          <span className="font-medium">£3.95</span>
        </div>
      </section>
      
      {/* Order Notes */}
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-lg font-bold mb-4 text-left uppercase">About Your Order</h2>
        
        <div>
          <Textarea 
            placeholder="Anything we should know about delivery or your order (optional)" 
            className="w-full h-24" 
          />
        </div>
      </section>
      
      {/* Payment Section */}
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-lg font-bold mb-4 text-left uppercase">Payment</h2>
        <p className="text-left mb-4 text-sm">Checkout with your credit or debit card</p>
        
        <RadioGroup defaultValue="card" className="space-y-4">
          <div className="flex items-center">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="ml-2">Credit/Debit Cards</Label>
            <div className="ml-auto flex gap-1">
              <img src="https://cdn.shopify.com/s/files/1/0266/1371/2059/files/amex_68x43_e96e358c-4e7a-42e7-be86-716538ea443d_x32.png?v=1614116468" alt="Amex" className="h-6" />
              <img src="https://cdn.shopify.com/s/files/1/0266/1371/2059/files/visa_68x43_5dd0e643-35c9-416c-8ef5-36eff410b6e7_x32.png?v=1614116471" alt="Visa" className="h-6" />
              <img src="https://cdn.shopify.com/s/files/1/0266/1371/2059/files/mastercard_68x43_cb187ee3-47ef-491c-8225-ab1a25daf942_x32.png?v=1614116469" alt="Mastercard" className="h-6" />
            </div>
          </div>
          
          <div className="pt-2 pb-4 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4">
              <Input 
                type="text" 
                className="col-span-2" 
                placeholder="Card number" 
              />
              <Input 
                type="text" 
                placeholder="MM / YY" 
              />
              <Input 
                type="text" 
                placeholder="CVC" 
                className="col-span-1" 
              />
            </div>
          </div>
          
          <div className="flex items-center border-t pt-4">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal" className="ml-2">PayPal</Label>
            <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg" alt="PayPal" className="h-6 ml-auto" />
          </div>
        </RadioGroup>
      </section>
    </div>
  );
};

export default CheckoutForm;
