import React from "react";

const AppDownloadSection = () => (
  <section className="app-section">
    <div className="app-content">
      <h2>Get the FreshBite App</h2>
      <p>Download our app for faster ordering and exclusive offers</p>
      <div className="app-buttons">
        <button className="app-store-button"><i className="fab fa-apple"></i> App Store</button>
        <button className="play-store-button"><i className="fab fa-google-play"></i> Google Play</button>
      </div>
    </div>
    <div className="app-image">
      <img src="https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf" alt="Mobile app" />
    </div>
  </section>
);

export default AppDownloadSection;
