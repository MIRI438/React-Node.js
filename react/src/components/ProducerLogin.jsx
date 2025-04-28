import { readProducer } from "../services/api";
import { readAllEvents, deleteEvent, updateProducer } from "../services/api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../style/ProducerForm.css";
import "../style/EventList.css";

const ProducerLogin = () => {
  const navigate = useNavigate();
  const [producer, setProducer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [id, setId] = useState("");
  const [events, setEvents] = useState([]);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPhone, setUpdatedPhone] = useState('');
  const [updateShortDescription, setUpdateShortDescription] = useState('');


  const handleDelete = (eventId) => {
    console.log("Deleting event with ID:", eventId);
    deleteData(eventId);
};

  const deleteData = async (eventId) => {
    try {
        console.log("Trying to delete event with ID:", eventId);
        await deleteEvent(eventId);
        setEvents(prevEvents => prevEvents.filter(event => event._id !== eventId)); // מעדכן את הרשימה אחרי מחיקה
    } catch (error) {
        console.error("Error deleting event:", error);
        setError("שגיאה במחיקת האירוע");
    }
};

  const fetchDetails = async () => {
    if (!id.trim()) {
      alert("אנא הכנס קוד מפיק");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await readProducer(id);
      if (response) {
        setProducer(response);
        setUpdatedName(response.name || "");
        setUpdatedEmail(response.email || "");
        setUpdatedPhone(response.phone || "");
        setUpdateShortDescription(response.shortDescription || "");
        try{
            const listEventForProducer = await readAllEvents();
            if(listEventForProducer)
                setEvents(listEventForProducer);
            else
                setError("תקלה במציאת האירועים של מפיק "+id);
        } catch (eventError) {
            console.error("Error fetching events:", eventError);
            setError("אירעה שגיאה בטעינת האירועים");
        }    
      } else {
        setError("המפיק לא נמצא");
      }
    } catch (error) {
      console.error("Error fetching producer details:", error);
      setError("אירעה שגיאה בטעינת המפיק");
    } finally {
      setLoading(false);
    }
  };
   const handleUpdate = async () => {
          const updatedEvent = {
              name: updatedName,
              email: updatedEmail,
              phone: updatedPhone,
              shortDescription: updateShortDescription,
          };
      
          try {
              console.log(id,updatedEvent);
              await updateProducer(id, updatedEvent);
              alert("המפיק עודכן בהצלחה");
              
              
          } catch (error) {
              console.error("Error updating event:", error);
              setError("אירעה שגיאה בעדכון המפיק");
          }
      };
      

  const filteredEvents = events.filter(event => event.producerID === id);
  const handleEventClick = (id) => {
    navigate(`/EventDetailsEdit/${id}`);
};

  return (
    <div className="home-container">
        <div className="status-bar">
        <div className="time">11:59</div>
        <div className="battery">88%</div>
      </div>
      <div className="event-list-container">
      <input
        type="text"
        placeholder="הכנס קוד מפיק"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="producer-card"
        id="inp"
      />
      <button onClick={fetchDetails} className="submit-button" disabled={loading} id="butt">
        {loading ? "טוען..." : "חפש מפיק"}
      </button>

      {error && <p className="error-message">{error}</p>}

      <button className="back-button" onClick={() => navigate("/ProducerDashboard")}>
        ❮
      </button> <br />
    
      <a className="submit-button" href="./EventForm">הוספת אירוע</a>


      {/* Display producer details only after the producer is found */}
      {producer && (
        <>
          <div className="event-list">
            <div key={producer} className="detail">
              <input
                className="event-card"
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
              <input
                className="event-card"
                type="text"
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
              />
              <input
                className="event-card"
                type="text"
                value={updatedPhone}
                onChange={(e) => setUpdatedPhone(e.target.value)}
              />
              <input
                className="event-card"
                type="text"
                value={updateShortDescription}
                onChange={(e) => setUpdateShortDescription(e.target.value)}
              />

            </div>
            <button onClick={handleUpdate} className="submit-button">לערוך פרטי מפיק</button>

          </div>
          <div className="event-list">
            {filteredEvents.map(event => (
              <div key={event._id} className="event-card">
                <h2 onClick={() => handleEventClick(event._id)}>{event.name}</h2>
                <a className="button-edit" onClick={() => handleDelete(event._id)}>מחיקה</a>
              </div>
            ))}

          </div>
         

        </>
      )}
       </div>
    </div>
  );
};

export default ProducerLogin;
