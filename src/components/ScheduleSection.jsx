import coupleImage from '../assets/couple-main.png'
import '../styles/ScheduleSection.css'
import ScheduleCard from './ScheduleCard'
import floralWreath from '../assets/floral-wreath.png'

export default function ScheduleSection() {
  return (
    <>
      <div className="schedule-section">
        {/* Left Side - Ritesh */}
        <div className="groom-details">
          <h1 className="name">Ritesh Debtath</h1>
          <p className="description">
            We look forward to building a life filled with love and countless memories. We are excited to share our joy.
          </p>
        </div>

        {/* Center - Couple Illustration */}
        <div className="couple-image-container">
          <img src={coupleImage} alt="Couple" className="couple-image" />
        </div>

        {/* Right Side - Joya */}
        <div className="bride-details">
          <h1 className="name">Joya Syarma</h1>
          <p className="description">
            We look forward to building a life filled with love and countless memories. We are excited to share our joy.
          </p>
        </div>
      </div>

      <div className="schedules-container">
        <h2 className="schedules-title">Schedules</h2>
        <div className="schedule-cards">
          <ScheduleCard title="Mehndi Ceremony" date="March 25, 2024" time="4:00 PM - 7:00 PM" backgroundImage={floralWreath} />
          <ScheduleCard title="Sangeet Night" date="March 26, 2024" time="7:00 PM - 11:00 PM" backgroundImage={floralWreath} />
          <ScheduleCard title="Haldi Ceremony" date="March 27, 2024" time="10:00 AM - 1:00 PM" backgroundImage={floralWreath} />
        </div>
        <div className="schedule-cards">
          <ScheduleCard title="Pithi Ceremony" date="March 28, 2024" time="11:00 AM - 2:00 PM" backgroundImage={floralWreath} />
          <ScheduleCard title="Tilak Ceremony" date="March 29, 2024" time="12:00 PM - 3:00 PM" backgroundImage={floralWreath} />
          <ScheduleCard title="Bachelor Party" date="March 27, 2024" time="8:00 PM - 1:00 AM" backgroundImage={floralWreath} />
        </div>
      </div>
    </>
  )
}
