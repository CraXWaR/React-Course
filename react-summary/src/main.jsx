import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, {postsLoader} from './routes/Posts.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PostList from "./components/PostList.jsx";
import NewPost, {addPostAction} from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import PostDetails, {postDetailsLoader} from "./routes/PostDetails.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/', element: <Posts/>, loader: postsLoader,
                children: [
                    {path: '/create-post', element: <NewPost/>, action: addPostAction},
                    {path: '/edit-post/:id', element: <PostDetails/>, loader: postDetailsLoader},
                ]
            },
            {path: '/posts/:id', element: <PostList/>}
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
