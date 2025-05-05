
import React from 'react';

const StarterBox = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1598134493179-51332e56807f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Starter Box" 
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-montys-green mb-6">
              To help you switch to freshly cooked dog food, you can try one of our Starter Boxes so you can see how your dog gets on with a new, healthier diet
            </h2>
            <p className="mb-6">
              Every Monty's Larder is hand crafted using only East Dorset beef and lamb, sustainably-farmed not factory sourced meat, vegetables, and a bit of minerals, healthy extras and daily seeds, and high in Omega 3.
            </p>
            <p className="mb-8">
              Feeding freshly cooked food using power-natural ingredients is healthier for your dog and better for you.
            </p>
            <button className="btn-primary uppercase">SHOP STARTER BOX</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarterBox;
