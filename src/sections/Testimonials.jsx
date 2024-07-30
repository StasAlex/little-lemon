import React from "react";
import Testimonial from "../components/Testimonial";
import { testimonials } from '../constants/index.js';

function Testimonials() {
  return (
    <section className="container mx-auto px-4 mb-10 lg:mb-14">
      <h2 className="text-primary text-3xl md:text-5xl font-semibold mb-5 lg:mb-10 xs:mb-0 mx-2">Testimonials</h2>
      <div className="flex flex-wrap">
        {testimonials.map(item => (
          <Testimonial
            key={item.name}
            name={item.name}
            image={item.image}
            rating={item.rating}
            review={item.review}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
