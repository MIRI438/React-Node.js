import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { readEvent, updateEvent } from "../services/api";
import '../style/EventDetails.css';

const EventDetailsEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [updatedName, setUpdatedName] = useState('');
    const [updatedDetails, setUpdatedDetails] = useState('');
    const [updatedProducerID, setUpdatedProducerID] = useState('');

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await readEvent(id);
                setEvent(response);
                setUpdatedName(response.name || '');
                setUpdatedDetails(response.details || '');
                setUpdatedProducerID(response.producerID || '');
            } catch (error) {
                setError("אירעה שגיאה בטעינת האירוע");
            } finally {
                setLoading(false);
            }
        };
        fetchDetails();
    }, [id]);

    const handleUpdate = async () => {
        const updatedEvent = {
            name: updatedName,
            details: updatedDetails,
            producerID: updatedProducerID,
        };
    
        try {
            console.log(id,updatedEvent);
            await updateEvent(id, updatedEvent);
            alert("האירוע עודכן בהצלחה");
            
            
        } catch (error) {
            console.error("Error updating event:", error);
            setError("אירעה שגיאה בעדכון האירוע");
        }
    };
    
    

    if (loading) return <p>טוען...</p>;
    if (error) return <p>❌ {error}</p>;
    if (!event) return <p>⚠️ לא נמצא אירוע</p>;

    return (
        <div className="home-container">
            <div className="status-bar">
                <div className="time">12:45</div>
                <div className="battery">100%</div>
            </div>
            <button className="back-button" onClick={() => navigate("/ProducerLogin")}>❮</button>

            <div className="event-list">
                <div key={event._id} className="detail">
      
                    
                    <input 
                    className="event-card"
                        type="text" 
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)} 
                        placeholder="עדכון שם האירוע"
                    />
                    <input 
                        className="event-card"
                        type="text" 
                        value={updatedDetails}
                        onChange={(e) => setUpdatedDetails(e.target.value)} 
                        placeholder="עדכון פרטי האירוע"
                    />
                    <input 
                        className="event-card"
                        type="text" 
                        value={updatedProducerID}
                        onChange={(e) => setUpdatedProducerID(e.target.value)} 
                        placeholder="עדכון קוד מפיק"
                    />
                </div>

                <button onClick={handleUpdate} className="submit-button">לערוך פרטי אירוע</button>
            </div>
        </div>
    );
};

export default EventDetailsEdit;
