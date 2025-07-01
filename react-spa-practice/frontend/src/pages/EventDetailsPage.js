import EventItem from "../components/EventItem";
import {useLocation} from "react-router-dom";

function EventDetailsPage() {
    const location = useLocation();
    const event = location.state;

    return (<EventItem event={event}/>);
}

export default EventDetailsPage;
