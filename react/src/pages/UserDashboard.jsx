import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
            <div className="status-bar">
                <div className="time">12:41</div>
                <div className="battery">93%</div>
            </div>
            <button className="back-button" onClick={() => navigate("/")}>❮</button>
            <div className="event-list-container">
          
          <Link to="/UserDashboard/EventList" className="custom-button" >לרשימת האירועים</Link>
    </div>
    </div>
  );
};

export default UserDashboard;