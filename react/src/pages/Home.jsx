import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Home.css"; // ייבוא קובץ ה-CSS

const Home = () => {
  return (
    <div className="home-container">
    <div className="status-bar">
        <div className="time">12:36</div>
        <div className="battery">96%</div>
    </div>
      <div className="button-container">
        <Link to="/ProducerDashboard" className="custom-button">כניסת מפיקים</Link>
        <Link to="/UserDashboard" className="custom-button">כניסת משתמשים</Link>
      </div>
      <div className="pass"></div>
    </div>
  );
};

export default Home;
