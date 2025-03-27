import React, { useEffect, useState } from 'react';
import {readProducer} from '../services/api'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const ProducerDetails = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const producerID = params.get('producerID'); 
    const [producer, setProducer] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            if (producerID)
            try{
                const data = await readProducer(producerID);
                setProducer(data);
            }catch(error){
                console.log(error);
            }
        }
        fetch();
    }, [producerID]); 

  return (
    <div className="home-container">
            <div className="status-bar">
                <div className="time">12:45</div>
                <div className="battery">100%</div>
            </div>
            <button className="back-button" onClick={() => navigate("/UserDashboard/EventList")}>❮</button>
            
    <div>
    <h2> :פרטי המפיק</h2><br />
    <p>{producer.name} : שם</p>
    <p>{producer.email} : אימייל</p>
    <p>{producer.phone} : פלאפון</p>

    </div> 
    </div> );
};

export default ProducerDetails;
