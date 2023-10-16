// Categories.js
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  // Define your categories and associated images here
  const categories = [
    {
      name: 'BathRoom',
      image: './4.png',
    },
    {
      name: 'BedRoom',
      image: './3.png',
    },
    {
      name: 'DiningRoom',
      image: './2.png',
    },
    {
      name: 'LivingRoom',
      image: './5.png',
    },
    {
      name: 'ModularKitchen',
      image: './1.png',
    },
  ];

  return (
    <div>
      <h2>Categories</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <Link key={index} to={`/${category.name}`}>
              <div key={index} className="category">
               <img src={category.image} alt={category.name}/>
               <p>{category.name}</p>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
