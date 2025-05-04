
import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Beef Casserole',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=300&q=80',
      description: 'Combines Tasty Red Meat, Carrots and Root Veg With Broccoli, Carrots, And Spinach',
      prices: {
        small: { weight: '400G', price: '£4.50' },
        medium: { weight: '700G', price: '£7.70' },
        large: { weight: '1KG', price: '£9.95' },
      },
    },
    {
      id: 2,
      title: 'Cottage Pie',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=300&q=80',
      description: 'Blends Tasty Red Meat Topped With Potatoes Mixed Vegetables And Cheese',
      prices: {
        small: { weight: '400G', price: '£4.50' },
        medium: { weight: '700G', price: '£7.70' },
        large: { weight: '1KG', price: '£9.95' },
      },
    },
    {
      id: 3,
      title: 'Lamb Hotpot',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=300&q=80',
      description: 'Combines Juicy Lamb Pieces With Mixed Vegetables Studded With Sweet Potatoes',
      prices: {
        small: { weight: '400G', price: '£4.50' },
        medium: { weight: '700G', price: '£7.70' },
        large: { weight: '1KG', price: '£9.95' },
      },
    },
    {
      id: 4,
      title: 'Fish Pie',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80',
      description: 'Combines A Selection Of White Fish And Salmon With Potato And Fresh Vegetables',
      prices: {
        small: { weight: '400G', price: '£4.50' },
        medium: { weight: '700G', price: '£7.70' },
        large: { weight: '1KG', price: '£10.50' },
      },
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              prices={product.prices}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
