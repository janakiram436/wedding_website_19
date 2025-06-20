import React from 'react';
import '../styles/Footer.css';
import floralImage from '../assets/floral-wreath.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <img src={floralImage} alt="floral design" className="footer-floral-left" />
      <div className="footer-content">
        <p className="footer-text">
          Let us come together in the spirit of love and joy, as we embark on
          this beautiful journey of togetherness. Your presence will add warmth
          and blessings to our union, making it a celebration to remember in
          our hearts and souls.
        </p>
        <nav className="footer-nav">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#schedules">SCHEDULES</a></li>
            <li><a href="#rsvp">RSVP</a></li>
            <li><a href="#gallery">GALLERY</a></li>
            <li><a href="#gift-registry">GIFT REGISTRY</a></li>
          </ul>
        </nav>
      </div>
      <img src={floralImage} alt="floral design" className="footer-floral-right" />
    </footer>
  );
};

export default Footer; 