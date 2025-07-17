import React from "react";

const restaurants = [
  {
    name: "Foodie's Hub",
    rating: 4.5,
    cuisine: "Italian • ₹₹",
    time: "25-35 min",
    delivery: "Free delivery",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  },
  {
    name: "Burger Point",
    rating: 4.2,
    cuisine: "American • ₹",
    time: "15-25 min",
    delivery: "Free delivery",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
  },
  {
    name: "Sweet Treats",
    rating: 4.7,
    cuisine: "Desserts • ₹₹",
    time: "20-30 min",
    delivery: "₹30 delivery",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
  }
];

const RestaurantsSection = () => (
  <section id="restaurants" className="restaurants-section">
    <div className="section-header">
      <h2>Featured Restaurants</h2>
      <p>Top rated places near you</p>
    </div>
    <div className="restaurant-grid">
      {restaurants.map((r, i) => (
        <div className="restaurant-card" key={i}>
          <img src={r.image} alt={r.name} />
          <div className="restaurant-info">
            <h3>{r.name}</h3>
            <div className="restaurant-meta">
              <span className="restaurant-rating"><i className="fas fa-star"></i> {r.rating}</span>
              <span className="restaurant-cuisine">{r.cuisine}</span>
            </div>
            <div className="delivery-info">
              <span><i className="fas fa-clock"></i> {r.time}</span>
              <span><i className="fas fa-rupee-sign"></i> {r.delivery}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default RestaurantsSection;
