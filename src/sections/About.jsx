import React from 'react';
import AboutImg1 from '../assets/about/restaurant.jpg';
import AboutImg2 from '../assets/about/restaurant1.jpg';

function AboutHome() {
  return (
    <section className="about">
      <div className='about-txt'>
        <h2>Little Lemon</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. At Little Lemon Restaurant, we want you to feel right at home. Our restaurant provides a warm and inviting atmosphere, perfect for a casual lunch with friends, a romantic dinner for two, or a celebratory gathering with family.</p>
      </div>
      <div className='about-img'>
        <img className = "about-img1" src={AboutImg1} alt='little lemon restaurant'/>
        <img className='about-img2' src={AboutImg2} alt = 'little lemon chef cooking'/>
      </div>
    </section>
  );
}

export default AboutHome;
