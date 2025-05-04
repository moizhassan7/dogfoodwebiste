
import React from 'react';
import MealBox from './MealBox';

const MealBoxes = () => {
  const mealBoxes = [
    {
      id: 1,
      title: 'Beef Meal Box',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=300&q=80',
      description: 'Our all beef meal box - 14 days worth - contains Monty\'s Larder Beef Casserole meals and will feed your dog by up to 14 days.',
    },
    {
      id: 2,
      title: 'Mixed Meal Box',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=300&q=80',
      description: 'Our mixed box with 14 days of meals - contains Monty\'s Larder Beef Casserole meals and 7 Fish Pie meals and will last up to 14 days.',
    },
    {
      id: 3,
      title: 'Starter Box',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80',
      description: 'Our starter box is the perfect introduction and will allow you to switch your dog over in 14-day period by using Monty\'s meals with their existing food.',
    },
  ];

  return (
    <section className="py-16 bg-montys-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-montys-green mb-12">Monty's Larder Set Meal Boxes</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          As part of a one off order, you can choose one of our Set Meal Boxes with enough food to feed your dog for 2, 4 or 8 weeks
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mealBoxes.map((box) => (
            <MealBox
              key={box.id}
              title={box.title}
              image={box.image}
              description={box.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealBoxes;
