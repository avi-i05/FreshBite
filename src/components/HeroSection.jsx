import React from "react";

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h2 className="hero-title">Delicious Food Delivered Fast</h2>
      <p className="hero-subtitle">From your favorite restaurants to your doorstep in minutes</p>
      <div className="hero-cta">
        <button className="primary-button">Order Now</button>
        <button className="secondary-button">How It Works</button>
      </div>
    </div>
    <div className="hero-image">
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Delicious food" />
    </div>
  </section>
);

export default HeroSection;
