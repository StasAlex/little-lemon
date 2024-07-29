import React from 'react';
import starImage from '../assets/review/star.png';

function Testimonial({ name, image, rating, review }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={starImage} alt="star" className="max-w-3" key={i} />);
    }
    return stars;
  };

  return (
    <div className='flex flex-col basis-full xs:basis-1/2 lg:basis-1/4 mb-5 xs:pr-5'>
      <div className='flex items-start'>
        <img src={image} alt={name} className="rounded-full max-w-[50px] max-h-[50px] mr-5" />
        <div>
          <h3 className='text-xl font-bold'>{name}</h3>
          <span className='flex mt-1'>
            {renderStars()}
          </span>
        </div>
      </div>
      <p className='text-xs mt-3'>{review}</p>
  </div>
  );
}

export default Testimonial;
