import {Link, Outlet, useNavigate, useParams} from 'react-router-dom';

import Header from '../Header.jsx';
import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteEvent, fetchEvent, queryClient} from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
    const {id} = useParams();
    const navigate = useNavigate();

    const {data, isPending, isError, error} = useQuery({
        queryKey: ['event', id],
        queryFn: ({signal}) => fetchEvent({id, signal}),
    });

    const {mutate, isPending: isDeleting,isError: isDeleteError, error: deleteError} = useMutation({
        mutationFn: deleteEvent,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['events']});
            navigate('/events');
        },
    })

    function handleDelete() {
        mutate({id})
    }

    return (<>
        <Outlet/>
        <Header>
            <Link to="/events" className="nav-item">
                View all Events
            </Link>
        </Header>

        {isError && <ErrorBlock title="Failed to load event" message={error.info?.message}/>}
        <article id="event-details">
            {isPending && <h1>Loading event...</h1>}
            {data && <div>
                <header>
                    <h1>{data.title}</h1>
                    <nav>
                        <button onClick={handleDelete}>{isDeleting ? 'Deleting…' : 'Delete'}</button>
                        <Link to="edit">Edit</Link>
                    </nav>
                </header>
                {isDeleteError && (<ErrorBlock title="Failed to delete event" message={deleteError?.info?.message}/>)}
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
