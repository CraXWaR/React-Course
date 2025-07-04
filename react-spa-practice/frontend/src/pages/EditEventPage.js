import EventForm from "../components/EventForm";
import {useLocation} from "react-router-dom";

function EditEventPage() {
    const location = useLocation();
    const event = location.state

    return (<EventForm method={'PATCH'} event={event}/>);
}

export default EditEventPage;