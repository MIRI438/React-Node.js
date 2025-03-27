import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import { EventList } from './components/EventList';
import  EventForm  from './components/EventForm';
import Home from "./pages/Home";
import UserDashboard from './pages/UserDashboard';
import ProducerDashboard from './pages/ProducerDashboard';
import ProducerForm from './components/ProducerForm';
import ProducerDetails from './components/ProducerDetails'
import EventDetails from './components/EventDetails';
import ProducerList from './components/ProducerList';
import ProducerLogin from './components/ProducerLogin';
import EventDetailsEdit from './components/EventDedailsEdit';


function App() {
    return (
        <Router>
            <Navbar /> 
            <Routes>
                <Route path="/event" element={<EventList />} />
                <Route path="/EventForm" element={<EventForm />} />
                <Route path="/" element={<Home />} />
                <Route path="/UserDashboard" element={<UserDashboard />} />
                <Route path="/ProducerDashboard" element={<ProducerDashboard />} />
                <Route path="/ProducerDashboard/ProducerForm" element={<ProducerForm />} />
                <Route path="/ProducerDashboard/ProducerDetails" element={<ProducerDetails />} />
                <Route path="/UserDashboard/EventList" element={<EventList />} />
                <Route path="/EventDetailsEdit/:id" element={<EventDetailsEdit />} />
                <Route path="/events/:id" element={<EventDetails />} />
                <Route path="/ProducerDetails" element={<ProducerDetails />} />
                <Route path="/ProducerList" element={<ProducerList />} />
                <Route path="/ProducerLogin" element={<ProducerLogin />} />

            </Routes>
        </Router>
    );
}

export default App;