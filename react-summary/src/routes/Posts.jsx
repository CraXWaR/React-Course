import {Outlet} from "react-router-dom";

import PostList from "../components/PostList.jsx";

function Posts() {
    return (<>
        <Outlet/>
        <main>
            <PostList/>
        </main>
    </>);
}

export default Posts;

export async function postsLoader() {
    const response = await fetch("http://localhost:8080/posts");

    if (!response.ok) {
        throw new Response("Failed to fetch posts", {status: response.status});
    }

    const data = await response.json();
    return data;
}
