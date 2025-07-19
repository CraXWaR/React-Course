import {Link, Outlet, useNavigate, useParams} from 'react-router-dom';

import Header from '../Header.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteEvent, fetchEvent, queryClient} from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import {useState} from "react";
import Modal from "../UI/Modal.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";

export default function EventDetails() {
    const [onDeleting, setOnDeleting] = useState(false);

    const {id} = useParams();
    const navigate = useNavigate();

    const {data, isPending, isError, error} = useQuery({
        queryKey: ['events', id], queryFn: ({signal}) => fetchEvent({id, signal}),
    });

    const {mutate, isPending: isPendingDeletion, isError: isDeleteError, error: deleteError} = useMutation({
        mutationFn: deleteEvent, onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['events'], refetchType: "none"
            });
            setOnDeleting(false);
            navigate('/events');
        },
    })

    function startDeleting() {
        setOnDeleting(true);
    }

    function stopDeleting() {
        setOnDeleting(false);
    }

    function handleDelete() {
        mutate({id})
    }

    return (<>
        {onDeleting && (<Modal onClose={stopDeleting}>
                <h2>Are you sure you want to delete this event?</h2>
                <p>This action can't be undone.</p>
                <div className="form-actions">
                    <button onClick={stopDeleting} className='button-text'>Cancel</button>
                    <button onClick={handleDelete} className='button'>{isPendingDeletion ? 'Deleting…' : 'Delete'}</button>
                </div>
            {isDeleteError && (<ErrorBlock title="Failed to delete event" message={deleteError?.info?.message}/>)}
        </Modal>)}
        <Outlet/>
        <Header>
            <Link to="/events" className="nav-item">
                View all Events
            </Link>
        </Header>

        {isError && <ErrorBlock title="Failed to load event" message={error.info?.message}/>}
        <article id="event-details">
            {isPending && <div id="event-details-content" className="center">
                <LoadingIndicator/>
                <p>Loading event...</p>
            </div>}
            {data && <div>
                <header>
                    <h1>{data.title}</h1>
                    <nav>
                        <button onClick={startDeleting}>Delete</button>
                        <Link to="edit">Edit</Link>
                    </nav>
                </header>

                <div id="event-details-content">
                    <img src={`../../../backend/public/${data.image}`} alt={data.title}/>
                    <div id="event-details-info">
                        <div>
                            <p id="event-details-location">{data.location}</p>
                            <time dateTime={`Todo-DateT$Todo-Time`}>{data.date}</time>
                        </div>
                        <p id="event-details-description">{data.description}</p>
                    </div>
                </div>
            </div>}

        </article>
    </>);
}
