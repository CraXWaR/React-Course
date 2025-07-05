import classes from './EventItem.module.css';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteEvent} from "../store/features/events/eventsSlice";

function EventItem({event}) {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    async function startDeleteHandler() {
        const confirm = window.confirm("Are you sure you want to delete this event?");

        if (!confirm) {
            return;
        }

        try {
            const res = await fetch(`http://localhost:8080/events/${event.id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Could not delete event");
            }

            dispatch(deleteEvent(event.id));
            navigate('/events');
        } catch (error) {
            alert('Delete failed: ' + error.message);
        }
    }

    return (<article className={classes.event}>
        <img src={event.image} alt={event.title}/>
        <h1>{event.title}</h1>
        <time>{event.date}</time>
        <p>{event.description}</p>
        <menu className={classes.actions}>
            <Link to={`/events/${event.id}/edit`} state={event}>Edit</Link>
            <button onClick={startDeleteHandler}>Delete</button>
        </menu>
    </article>);
}

export default EventItem;
