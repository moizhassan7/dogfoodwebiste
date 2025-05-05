
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

export interface CartProduct {
  id: number;
  title: string;
  image: string;
  description: string;
  selectedWeight: string;
  selectedPrice: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productId: number, selectedWeight: string) => void;
  updateQuantity: (productId: number, selectedWeight: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const { toast } = useToast();

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: CartProduct) => {
    setCartItems(prevItems => {
      // Check if product with same ID and weight already exists
      const existingItemIndex = prevItems.findIndex(
        item => item.id === product.id && item.selectedWeight === product.selectedWeight
      );

      if (existingItemIndex !== -1) {
        // Update quantity if product exists
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += product.quantity;
        
        toast({
          title: 'Product updated',
          description: `Quantity updated in your box.`,
        });
        
        return newItems;
      } else {
        // Add new product
        toast({
          title: 'Product added',
          description: `${product.title} added to your box.`,
        });
        
        return [...prevItems, product];
      }
    });
  };

  const removeFromCart = (productId: number, selectedWeight: string) => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.id === productId && item.selectedWeight === selectedWeight))
    );
    
    toast({
      title: 'Product removed',
      description: 'Item removed from your box.',
    });
  };

  const updateQuantity = (productId: number, selectedWeight: string, quantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        (item.id === productId && item.selectedWeight === selectedWeight) 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    
    toast({
      title: 'Cart cleared',
      description: 'All items have been removed from your box.',
    });
  };

  // Calculate total items
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate subtotal (parse price strings to get numbers)
  const subtotal = cartItems.reduce((total, item) => {
    const priceString = item.selectedPrice;
    const price = parseFloat(priceString.replace('£', ''));
    return total + (price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart,
        totalItems,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
