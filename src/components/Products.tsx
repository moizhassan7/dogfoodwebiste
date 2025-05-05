
import React from 'react';
import ProductCard from './ProductCard';
import beefimg from "./img/cassarolenew.png"
import cottoagepie from "./img/cottage.png"
import lambhotpot from "./img/lambnew.png"
import fishpie from "./img/fishpie-2.png"
const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Beef Casserole',
      image: beefimg,
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
      image: cottoagepie,
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
      image: lambhotpot,
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
      image: fishpie  ,
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
