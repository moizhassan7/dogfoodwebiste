
import React from 'react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  prices: {
    small: { weight: string; price: string };
    medium: { weight: string; price: string };
    large: { weight: string; price: string };
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, description, prices }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={title} className="w-40 h-40 object-cover" />
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-sm text-center mb-4">{description}</p>
      <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
        <div className="bg-montys-beige rounded-md p-2 text-center hover:bg-montys-green hover:text-white">
          <p className="font-bold  hover:bg-montys-green hover:text-white">{prices.small.weight}</p>
          <p className="text-xs">{prices.small.price}</p>
        </div>
        <div className="bg-montys-beige rounded-md p-2 text-center hover:bg-montys-green hover:text-white">
          <p className="font-bold">{prices.medium.weight}</p>
          <p className="text-xs">{prices.medium.price}</p>
        </div>
        <div className="bg-montys-beige rounded-md p-2 text-center hover:bg-montys-green hover:text-white">
          <p className="font-bold hover:bg-montys-green hover:text-white">{prices.large.weight}</p>
          <p className="text-xs">{prices.large.price}</p>
        </div>
      </div>
      <button className="btn-outline mt-4">ADD TO BOX</button>
    </div>
  );
};

export default ProductCard;
