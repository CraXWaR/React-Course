import Post from "./Post.jsx";

import classes from './PostList.module.css';

import {useEffect, useState} from "react";

export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsLoading(true);
            await fetch('http://localhost:8080/posts').then(response => response.json())
                .then(data => {
                    console.log(data);
                    setPosts(data.posts);
                })
            setIsLoading(false);
        }

        fetchPosts();
    }, []);

    function handleAddPost(post) {
        fetch('http://localhost:8080/posts', {
            method: 'POST', body: JSON.stringify(post), headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(data => {
                console.log(data);
            })

        // setPosts(prevPosts => {
        //     return [...prevPosts, post];
        // });
    }

    return (<>
        <ul className={classes.posts}>
            {!isLoading && posts.length > 0 && posts.map(post => <Post key={post.id} {...post}/>)}
        </ul>

        {!isLoading && posts.length === 0 && (<p
            style={{
                textAlign: 'center', fontSize: '1.2rem', color: 'white', marginTop: '2rem'
            }}>
            🚀 No posts yet — be the pioneer!
            <br/>
            Share your thoughts and start the conversation.
        </p>)}

        {isLoading && <p style={{
            textAlign: 'center', fontSize: '1.2rem', color: 'white', marginTop: '2rem'
        }}>Loading...</p>}
    </>);
}