
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/components/ui/use-toast';

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
  prices: {
    small: { weight: string; price: string };
    medium: { weight: string; price: string };
    large: { weight: string; price: string };
  };
  id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, description, prices, id }) => {
  const [selectedWeight, setSelectedWeight] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleWeightSelect = (value: string) => {
    setSelectedWeight(value);
    setError(null);
    
    // Set the corresponding price
    switch (value) {
      case prices.small.weight:
        setSelectedPrice(prices.small.price);
        break;
      case prices.medium.weight:
        setSelectedPrice(prices.medium.price);
        break;
      case prices.large.weight:
        setSelectedPrice(prices.large.price);
        break;
      default:
        setSelectedPrice(null);
    }
  };

  const handleAddToBox = () => {
    if (!selectedWeight || !selectedPrice) {
      setError('Please select a weight before adding to basket');
      toast({
        title: 'Selection required',
        description: 'Please select a weight before adding to basket',
        variant: 'destructive',
      });
      return;
    }

    // Add to cart
    addToCart({
      id,
      title,
      image,
      description,
      selectedWeight,
      selectedPrice,
      quantity: 1,
    });

    // Redirect to checkout page
    navigate('/checkout');
  };

  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={title} className="w-40 h-40 object-cover" />
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-sm text-center mb-4">{description}</p>
      <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
        <div className="bg-montys-beige rounded-md p-2 text-center">
          <p className="font-bold text-montys-green">{prices.small.weight}</p>
          <p className="text-xs">{prices.small.price}</p>
        </div>
        <div className="bg-montys-beige rounded-md p-2 text-center">
          <p className="font-bold text-montys-green">{prices.medium.weight}</p>
          <p className="text-xs">{prices.medium.price}</p>
        </div>
        <div className="bg-montys-beige rounded-md p-2 text-center">
          <p className="font-bold text-montys-green">{prices.large.weight}</p>
          <p className="text-xs">{prices.large.price}</p>
        </div>
      </div>
      
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      
      <Button 
        onClick={handleAddToBox}
        className="bg-montys-coral hover:bg-opacity-90 text-white"
      >
        ADD TO BOX
      </Button>
    </div>
  );
};

export default ProductCard;
