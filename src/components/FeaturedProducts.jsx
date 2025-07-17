import React from "react";

const products = [
  {
    title: "Margherita Pizza",
    rating: 4.8,
    price: 299,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    badge: "Bestseller"
  },
  {
    title: "Cheeseburger",
    rating: 4.6,
    price: 199,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
  },
  {
    title: "Buddha Bowl",
    rating: 4.7,
    price: 349,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    badge: "New"
  },
  {
    title: "Fresh Salad",
    rating: 4.5,
    price: 249,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  }
];

const FeaturedProducts = () => (
  <section id="products" className="featured-section">
    <div className="section-header">
      <h2>Popular Dishes</h2>
      <p>Most ordered items this week</p>
    </div>
    <div className="food-grid">
      {products.map((item, index) => (
        <div className="food-card" key={index}>
          {item.badge && <div className="food-badge">{item.badge}</div>}
          <img src={item.image} alt={item.title} />
          <div className="food-info">
            <h3>{item.title}</h3>
            <div className="food-meta">
              <span className="food-rating"><i className="fas fa-star"></i> {item.rating}</span>
              <span className="food-price">₹{item.price}</span>
            </div>
            <button className="add-to-cart">
              <i className="fas fa-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedProducts;
