import { creatProducer } from "../services/api";
import React, { useState } from "react";
import "../style/ProducerForm.css"
import { useNavigate } from "react-router-dom";


const ProducerForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProducer = { name, email, phone, shortDescription };
    try {
      await creatProducer(newProducer);
      alert("המפיק נוסף בהצלחה!");
    } catch (error) {
      console.error("Error adding producer:", error);
    }
  };

  return (
    <div className="home-container">
      <div className="status-bar">
        <div className="time">11:59</div>
        <div className="battery">88%</div>
      </div>
      <button className="back-button" onClick={() => navigate("/ProducerDashboard")}>❮</button>

      <h2 id="title" className="title">הוסף מפיק</h2>
      <form onSubmit={handleSubmit} className="add-producer-form">
        <label>שם </label>
        <input
          className="producer-card"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>מייל</label>
        <input 
          className="producer-card"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>פלאפון</label>
        <input
          className="producer-card"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>תיאור קצר</label>
        <input
          className="producer-card"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          required
        />

        <button type="submit" className="submit-button">הוספה </button>
      </form>
    </div>
  );
};

export default ProducerForm;
