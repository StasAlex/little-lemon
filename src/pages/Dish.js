import React from 'react';
import { useParams } from 'react-router-dom';

const Dish = () => {
  const { slug } = useParams();
  
  return (
    <div>
      <h1>Recipe for {slug.replace('-', ' ')}</h1>
      {/* Add more details about the dish */}
    </div>
  );
};

export default Dish;
