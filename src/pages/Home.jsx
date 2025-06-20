// src/pages/Home.jsx
import HeroSection from '../components/HeroSection';
//import Couple from '../components/Couple';
import ScheduleSection from '../components/ScheduleSection';
import RSVPForm from '../components/RSVPForm';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <ScheduleSection />
      <RSVPForm />
    </div>
  );
}
export default Home;