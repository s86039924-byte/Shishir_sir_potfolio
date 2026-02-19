'use client';

import React from 'react';
import './TestimonialsSection.css';

const testimonialImages = [
  '/tetimonila/1.jpeg',
  '/tetimonila/2.jpeg',
  '/tetimonila/3.jpeg',
  '/tetimonila/4.jpeg',
  '/tetimonila/5.jpeg',
  '/tetimonila/6.jpeg',
  '/tetimonila/7.jpeg',
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-title">
          <div className="title-text">Success Stories</div>
          <div className="title-underline" />
        </div>

        <div className="testi-grid-home">
          {testimonialImages.map((src, idx) => (
            <div key={idx} className="home-testi-card">
              <img
                src={src}
                alt={`Testimonial ${idx + 1}`}
                className="home-testi-img"
                loading="lazy"
              />
              <div className="home-testi-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
