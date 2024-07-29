import React from "react";
import Testimonial from "./Testimonial";
import { testimonials } from '../constants/index.js';

function Testimonials() {
  return (
    <section className="px-4 py-6">
      <h2 className="text-primary font-medium text-3xl mb-3">Testimonials</h2>
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
