import { readAllEvents } from "../services/api";
import React, { useEffect, useState } from "react";
import "./EventList.css";
import { useNavigate } from "react-router-dom";

export const EventList = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleEventClick = (id) => {
        navigate(`/events/${id}`);
    };

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await readAllEvents();
                setEvents(data);
            } catch (error) {
                console.error("Fetch error:", error);
                setError("אירעה שגיאה בטעינת האירוע");
            } finally {
                setLoading(false);
            }
            
        };
        fetchEvents();
    }, []);

    if (loading) return
    if (error) return <p>❌ {error}</p>;

    const changeFilter = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home-container">
            <div className="status-bar">
                <div className="time">12:45</div>
                <div className="battery">100%</div>
            </div>
            <button className="back-button" onClick={() => navigate("/UserDashboard")}>❮</button>
            <div className="event-list-container">
                <h1 className="title">חיפוש אירועים</h1>
                <input
                    onChange={changeFilter}
                    placeholder=""
                    className="search-input"
                />
                <div className="event-list">
                    {filteredEvents.map(event => (
                        <div key={event._id} className="event-card" onClick={() => handleEventClick(event._id)}>
                            <h2>{event.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
