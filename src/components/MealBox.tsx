
import React from 'react';

interface MealBoxProps {
  title: string;
  image: string;
  description: string;
}

const MealBox: React.FC<MealBoxProps> = ({ title, image, description }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={title} className="w-48 h-48 object-cover" />
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-sm text-center mb-4 max-w-xs">{description}</p>
      <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
        <button className="bg-montys-beige hover:bg-montys-green hover:text-white text-montys-green text-sm font-medium py-2 px-4 rounded-md transition-colors">Small</button>
        <button className="bg-montys-beige hover:bg-montys-green hover:text-white text-montys-green text-sm font-medium py-2 px-4 rounded-md transition-colors">Medium</button>
        <button className="bg-montys-beige hover:bg-montys-green hover:text-white text-montys-green text-sm font-medium py-2 px-4 rounded-md transition-colors">Large</button>
      </div>
      <button className="btn-outline mt-6 uppercase text-sm">ONE OFF ORDER</button>
    </div>
  );
};

export default MealBox;
