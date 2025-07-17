import React from "react";

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>FreshBite</h3>
        <p>Delivering happiness through food since 2025</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Press</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Safety Center</a></li>
          <li><a href="#">Community Guidelines</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 FreshBite. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
