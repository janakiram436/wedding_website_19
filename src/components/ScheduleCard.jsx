// src/components/ScheduleCard.jsx
import '../styles/ScheduleCard.css';

const ScheduleCard = ({ title, date, time, backgroundImage }) => (
  <div
    className="schedule-card"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <h3 className="card-title">{title}</h3>
    <p className="card-date">{date}</p>
    <p className="card-time">{time}</p>
  </div>
);
export default ScheduleCard;
