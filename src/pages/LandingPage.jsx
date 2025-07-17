import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import FeaturedProducts from "../components/FeaturedProducts";
import RestaurantsSection from "../components/RestaurantsSection";
import AppDownloadSection from "../components/AppDownloadSection";
import Footer from "../components/Footer";
import "../styles/LandingPage.css";

const LandingPage = () => (
  <div className="landing-page">
    <Header />
    <HeroSection />
    <CategoriesSection />
    <FeaturedProducts />
    <RestaurantsSection />
    <AppDownloadSection />
    <Footer />
  </div>
);

export default LandingPage;
