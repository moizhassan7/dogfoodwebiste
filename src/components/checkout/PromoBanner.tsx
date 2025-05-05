
import React from 'react';

interface PromoBannerProps {
  orderTotal: number;
  minimumOrder: number;
}

const PromoBanner = ({ orderTotal, minimumOrder }: PromoBannerProps) => {
  const isBelowMinimum = orderTotal < minimumOrder;
  
  return (
    <>
      {isBelowMinimum && (
        <div className="bg-red-100 border border-red-200 text-gray-700 p-4 rounded mb-4">
          <p>
            Your current order total is £{orderTotal.toFixed(2)} - you must have an order with a minimum of £{minimumOrder.toFixed(2)} to place your order.
          </p>
        </div>
      )}
      
      {!isBelowMinimum && (
        <div className="bg-green-50 border border-green-200 text-gray-700 p-4 rounded mb-4">
          <p>
            Your current order total is £{orderTotal.toFixed(2)} - you meet the minimum order requirement of £{minimumOrder.toFixed(2)}.
          </p>
        </div>
      )}
    </>
  );
};

export default PromoBanner;
