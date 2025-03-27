import { creatEvent } from "../services/api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EventForm.css"; // ייבוא קובץ ה-CSS

const AddEvent =  () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [producerID, setProducerID] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEvent = { name, details, producerID };

        try {
            await creatEvent(newEvent);
            alert("האירוע נוסף בהצלחה!");
        } catch (error) {
            console.error("Error adding event:", error);
        }
    };

    return (
        <div className="home-container">
      <div className="status-bar">
        <div className="time">11:59</div>
        <div className="battery">88%</div>
      </div>
      <button className="back-button" onClick={() => navigate("/ProducerLogin")}>❮</button>

      <h2 id="title" className="title">הוסף אירוע</h2>
      <form onSubmit={handleSubmit} className="add-producer-form">
        <label>שם </label>
        <input
          className="producer-card"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>פרטים</label>
        <input 
          className="producer-card"
          type="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />

        <label>קוד מפיק</label>
        <input
          className="producer-card"
          value={producerID}
          onChange={(e) => setProducerID(e.target.value)}
          required
        />

        <button type="submit" className="submit-button">הוספה </button>
      </form>
    </div>
    );
};

export default AddEvent;
