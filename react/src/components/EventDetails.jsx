import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readEvent } from "../services/api"; 
import { Link  } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./EventDetails.css";



const EventDetails = (  ) => {
    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id); 
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const eventId = id.split('/').pop();
        const fetchDetails = async () => {
            try {
                console.log(eventId);
                const response = await readEvent(eventId);
                setEvent(response); 
            } catch (error) {
                console.error("Error fetching event details:", error);
                setError("אירעה שגיאה בטעינת האירוע");
            } finally {
                setLoading(false);
            }
        };

        
            fetchDetails();
        
    }, [id]); 

    if (loading) return <p>טוען...</p>;
    if (error) return <p>❌ {error}</p>;
    if (!event) return <p>⚠️ לא נמצא אירוע</p>;
 

    return (
        <div className="home-container">
            <div className="status-bar">
                <div className="time">12:45</div>
                <div className="battery">100%</div>
            </div>
            <button className="back-button" onClick={() => navigate("/UserDashboard/EventList")}>❮</button>
            
        <div className="event-list">
        
            <div key={event._id} className="detail">
            <h2>שם האירוע :{event.name}</h2>
            <h2>פרטי האירוע :{event.details}</h2>

            <Link to={`/ProducerDetails?producerID=${event.producerID}`}>
                    <h2 > פרטי מפיק :</h2>
            </Link>
            </div>
        
        </div>
        </div>
    )

        
        
    
};

export default EventDetails;
