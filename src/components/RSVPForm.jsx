// src/components/RSVPForm.jsx
import '../styles/RSVPForm.css';
import newCoupleBg from '../assets/new-couple-bg.png';
//import formImage from '../assets/form image.png';

const RSVPForm = () => (
  <div className="rsvp-section" style={{ backgroundImage: `url(${newCoupleBg})` }}>
    <div className="rsvp-container">
      <div className="rsvp-form-container">
        <h2 className="form-title">Are You Attending?</h2>
        <form className="form">
          <input id="name" type="text" className="input" placeholder="Name" />

          <input id="email" type="email" className="input" placeholder="Email" />

          <div className="radio-group">
            <label><input type="radio" name="attending" value="yes" /> Yes, I will be there</label>
            <label><input type="radio" name="attending" value="no" /> Sorry, I can't come</label>
          </div>

          <input id="guests" type="number" className="input" placeholder="Number Of Guests" />

          <input id="events" type="text" className="input" placeholder="What Will You Be Attending" />
          
          <button type="submit" className="submit-btn">RSVP</button>
        </form>
      </div>
      
    </div>
  </div>
);
export default RSVPForm;