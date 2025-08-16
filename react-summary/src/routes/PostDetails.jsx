import {useLoaderData, Link} from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
    const data = useLoaderData();
    const post = data.post;

    if (!post) {
        return (<Modal>
            <main className={classes.details}>
                <h1>Could not find post</h1>
                <p>Unfortunately, the requested post could not be found.</p>
                <p>
                    <Link to=".." className={classes.btn}>
                        Okay
                    </Link>
                </p>
            </main>
        </Modal>);
    }
    return (<Modal>
        <main className={classes.details}>
            <p className={classes.author}>{post.author}</p>
            <p className={classes.text}>{post.text}</p>
        </main>
    </Modal>);
}

export default PostDetails;

export function postDetailsLoader({params}) {
    return fetch(`http://localhost:8080/posts/${params.id}`).then((response) => {
        if (!response.ok) {
            throw new Response("Failed to fetch post", {status: response.status});
        }
        return response.json();
    });
}