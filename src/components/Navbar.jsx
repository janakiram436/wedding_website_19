// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="logo-link">
      <h1 className="logo">Wedding</h1>
    </Link>
    <ul className="nav-links">
      {['Home', 'Schedules', 'RSVP', 'Gallery', 'Gift Registry'].map((item) => (
        <li key={item}><Link to="/">{item}</Link></li>
      ))}
    </ul>
  </nav>
);
export default Navbar; 