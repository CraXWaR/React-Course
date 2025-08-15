import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './routes/Posts.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PostList from "./components/PostList.jsx";
import NewPost from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/', element: <Posts/>, children: [
                    {path: '/create-post', element: <NewPost/>}
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
