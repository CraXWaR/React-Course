import {useNavigate} from 'react-router-dom';

import classes from './EventForm.module.css';
import {useState} from "react";
import {useDispatch} from "react-redux";

import {editEvent, addEvent} from '../store/features/events/eventsSlice';

function EventForm({method, event}) {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const dispatch = useDispatch();

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const eventData = {
            title: formData.get('title'),
            image: formData.get('image'),
            date: formData.get('date'),
            description: formData.get('description'),
        };

        const url = event?.id ? `http://localhost:8080/events/${event.id}` : 'http://localhost:8080/events';

        const httpMethod = method || (event?.id ? 'PATCH' : 'POST');

        try {
            const res = await fetch(url, {
                method: httpMethod, headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(eventData),
            });

            const data = await res.json();

            if (!res.ok) {
                if (data.errors) {
                    setErrors(data.errors || {});
                } else {
                    throw new Error('Something went wrong!');
                }
            } else {
                if (httpMethod === 'PATCH') {
                    dispatch(editEvent(data));
                } else {
                    dispatch(addEvent(data));
                }

                navigate('/events');
            }
        } catch (error) {
            console.log(error);
            setErrors({general: 'Could not save event. Please try again.'});
        }

        setIsSubmitting(false);
    }

    function cancelHandler() {
        navigate('..');
    }

    return (<form className={classes.form} onSubmit={handleSubmit}>
        <p>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" name="title" defaultValue={event?.title || ''}/>
            {errors.title && <span className={classes.error}>{errors.title}</span>}
        </p>
        <p>
            <label htmlFor="image">Image</label>
            <input id="image" type="url" name="image" defaultValue={event?.image || ''}/>
            {errors.image && <span className={classes.error}>{errors.image}</span>}
        </p>
        <p>
            <label htmlFor="date">Date</label>
            <input id="date" type="date" name="date" defaultValue={event?.date || ''}/>
            {errors.date && <span className={classes.error}>{errors.date}</span>}
        </p>
        <p>
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="5" defaultValue={event?.description || ''}/>
            {errors.description && <span className={classes.error}>{errors.description}</span>}
        </p>

        {errors.general && <p className={classes.error}>{errors.general}</p>}

        <div className={classes.actions}>
            <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
                Cancel
            </button>
            <button disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Save'}
            </button>
        </div>
    </form>);
}

export default EventForm;
