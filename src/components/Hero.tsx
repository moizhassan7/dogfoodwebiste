
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-montys-green text-white py-12 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Sample Meals</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl mb-8">
            Sample food for dogs has been vet developed to provide your dog with a complete and balanced diet.
          </p>
          <p className="text-base md:text-lg mb-6">
            To give your dog this choice, you can either create your own mix OR order with all your own choices or set up a subscription order to arrive every two, four or eight weeks.
          </p>
          <p className="text-base md:text-lg font-medium">
            It's entirely up to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
