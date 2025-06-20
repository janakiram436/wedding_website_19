// src/pages/Home.jsx
import HeroSection from '../components/HeroSection';
import ScheduleSection from '../components/ScheduleSection';
import EventsSection from '../components/EventsSection';
import AlbumSection from '../components/AlbumSection';
import MapSection from '../components/MapSection';
import RSVPForm from '../components/RSVPForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <HeroSection />
      <ScheduleSection />
      <EventsSection />
      <RSVPForm />
      <MapSection />
      <AlbumSection />
      <Footer />
    </div>
  );
};

export default Home;