
import React from 'react';
import { Circle } from 'lucide-react';

const Features = () => {
  const features = [
    { id: 1, name: 'No Fillers' },
    { id: 2, name: 'Fresh Ingredients' },
    { id: 3, name: 'Vet Developed' },
    { id: 4, name: 'Cooked Food For Dogs' },
    { id: 5, name: 'Grain Free' }
  ];

  return (
    <div className="bg-montys-green-light py-8">
      <div className="container mx-auto">
        <ul className="flex flex-wrap justify-center items-center">
          {features.map((feature, index) => (
            <li key={feature.id} className="flex items-center mx-4 my-2 text-white">
              <Circle size={24} className="text-montys-coral mr-2" fill="#f97f6a" />
              <span className="font-medium">{feature.name}</span>
              {index < features.length - 1 && (
                <span className="mx-4 text-white/30 hidden md:block">|</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
