import Post from "./Post.jsx";

import classes from './PostList.module.css';

import {useLoaderData} from "react-router-dom";

export default function PostList() {
    const data = useLoaderData();
    const posts = data.posts;

    return (<>
        <ul className={classes.posts}>
            {posts.length > 0 && posts.map(post => <Post key={post.id} {...post}/>)}
        </ul>

        {posts.length === 0 && (<p
            style={{
                textAlign: 'center', fontSize: '1.2rem', color: 'white', marginTop: '2rem'
            }}>
            🚀 No posts yet — be the pioneer!
            <br/>
            Share your thoughts and start the conversation.
        </p>)}
    </>);
}