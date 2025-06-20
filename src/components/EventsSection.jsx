import React from 'react';
import '../styles/EventsSection.css';
import receptionImage from '../assets/couple-main.png';
import ceremonyImage from '../assets/couple-photo.png';

const events = [
  {
    image: receptionImage,
    title: 'The Reception',
    date: 'Monday, 12 Apr. 2024 1:00 PM - 2:30 PM',
    location: 'Blue Ginger Lawn Taj West End\n25,Race Course Road, Bengaluru,\n560001',
  },
  {
    image: receptionImage,
    title: 'The Ceremony',
    date: 'Monday, 15 Apr. 2024 1:00 PM - 2:30 PM',
    location: 'Blue Ginger Lawn Taj West End\n25,Race Course Road, Bengaluru,\n560001',
  },
  {
    image: receptionImage,
    title: 'The Party',
    date: 'Monday, 25 Apr. 2025 1:00 PM - 2:30 PM',
    location: 'Blue Ginger Lawn Taj West End\n25,Race Course Road, Bengaluru,\n560001',
  },
];

const EventsSection = () => {
  return (
    <section className="events-section-container">
      <h2 className="events-title">When & Where</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <h3 className="event-card-title">{event.title}</h3>
            <p className="event-card-date">{event.date}</p>
            <p className="event-card-location">{event.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection; 