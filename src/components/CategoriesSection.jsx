import React from "react";

const categories = [
  { icon: "fas fa-pizza-slice", title: "Pizza", desc: "50+ Restaurants", class: "pizza" },
  { icon: "fas fa-hamburger", title: "Burgers", desc: "35+ Restaurants", class: "burger" },
  { icon: "fas fa-fish", title: "Sushi", desc: "28+ Restaurants", class: "sushi" },
  { icon: "fas fa-ice-cream", title: "Desserts", desc: "42+ Restaurants", class: "dessert" },
  { icon: "fas fa-leaf", title: "Salads", desc: "22+ Restaurants", class: "salad" },
];

const CategoriesSection = () => (
  <section id="categories" className="categories-section">
    <div className="section-header">
      <h2>Browse by Category</h2>
      <p>Discover your favorite food categories</p>
    </div>
    <div className="category-grid">
      {categories.map((cat, i) => (
        <div className="category-card" key={i}>
          <div className={`category-icon ${cat.class}`}>
            <i className={cat.icon}></i>
          </div>
          <h3>{cat.title}</h3>
          <p>{cat.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CategoriesSection;
