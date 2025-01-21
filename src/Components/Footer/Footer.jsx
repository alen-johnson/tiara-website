import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content-section">
          <h3>About Us</h3>
          <p>
            We are a small online store offering a curated selection of fashion and accessories. 
            Our goal is to provide quality products that match your style.
          </p>
        </div>

        <div className="footer__content-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Women</a></li>
            <li><a href="/shop">Kids</a></li>
            <li><a href="/shop">Beauty</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__content-section">
          <h3>Contact Us</h3>
          <p>Email: support@store.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        <div className="footer__content-section">
          <h3>Follow Us</h3>
          <div className="footer__content-section-social-icons">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>
      </div>

      <div className="footer__content-bottom">
        <p>&copy; 2025 Your Store. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
