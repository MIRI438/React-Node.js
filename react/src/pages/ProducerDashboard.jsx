import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";




const ProducerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
            <div className="status-bar">
                <div className="time">12:41</div>
                <div className="battery">93%</div>
            </div>
            <button className="back-button" onClick={() => navigate("/")}>❮</button>
      <div className="button-container">
        <Link to="/ProducerDashboard/ProducerForm" className="custom-button">הוספת מפיקה</Link>
        <Link to="/ProducerLogin" className="custom-button">מפיקה קיימת</Link>
      </div>
      
    </div>  );
};

export default ProducerDashboard;