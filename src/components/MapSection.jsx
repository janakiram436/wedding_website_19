import React from 'react';
import '../styles/MapSection.css';

const MapSection = () => {
  return (
    <div className="map-container">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12613.019742239129!2d-122.4080734!3d37.7852356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1e47e873%3A0x1d3d132a22a7f0a5!2sEpic%20Church%20San%20Francisco!5e0!3m2!1sen!2sus!4v1620837584581!5m2!1sen!2sus"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default MapSection; 