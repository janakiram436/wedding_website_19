// src/components/AlbumSection.jsx
import React from 'react';
import '../styles/AlbumSection.css';
import albumLookImage from '../assets/album-look.png';

const AlbumSection = () => {
  return (
    <section className="album-section">
      <img src={albumLookImage} alt="Wedding Album" className="album-look-image" />
    </section>
  );
};

export default AlbumSection; 