import { creatProducer } from "../services/api";
import React, { useState } from "react";
import "../style/ProducerForm.css"
import { useNavigate } from "react-router-dom";


const ProducerList = () => {

  const navigate = useNavigate();



  return (
    <div className="home-container">
      <div className="status-bar">
        <div className="time">11:59</div>
        <div className="battery">88%</div>
      </div>
      <button className="back-button" onClick={() => navigate("/ProducerDashboard")}>❮</button>

    </div>
  );
};

export default ProducerList;
