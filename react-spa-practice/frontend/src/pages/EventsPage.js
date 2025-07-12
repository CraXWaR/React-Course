import EventsList from "../components/EventsList";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setEvents} from '../../src/store/features/events/eventsSlice'
import PageContent from "../components/PageContent";

function EventsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(null);

    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.list);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const res = await fetch("http://localhost:8080/events");
                if (!res.ok) {
                    throw new Error("Failed to fetch events.");
                }
                const data = await res.json();
                dispatch(setEvents(data.events));
            } catch (error) {
                setLoadError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchEvents();
    }, [dispatch]);

    if (isLoading) return <PageContent title={'Loading events...'}/>;
    if (loadError) return <PageContent title={loadError}/>;
    if (events.length === 0) return <PageContent title={'No events found.'}/>;

    return (<EventsList events={events}/>);
}

export default EventsPage;