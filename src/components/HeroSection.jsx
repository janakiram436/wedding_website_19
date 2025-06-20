// src/components/HeroSection.jsx
import { useState, useEffect } from 'react';
import coupleImg from '../assets/couple-photo.png';
import '../styles/HeroSection.css';

const HeroSection = () => {
    
 
  return (
    <div>
    <img src={coupleImg} alt="Ritesh and Joya - Wedding Couple" height="100%" width="100%" />
  </div>     
  );
};
export default HeroSection;