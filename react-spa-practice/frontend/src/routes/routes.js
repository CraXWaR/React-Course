import {createBrowserRouter} from "react-router-dom";

import RootLayout from "../pages/RootLayout";

import HomePage from "../pages/HomePage";
import EventDetailsPage from "../pages/EventDetailsPage";
import EventsPage from "../pages/EventsPage";
import NewEventPage from "../pages/NewEventPage";
import EditEventPage from "../pages/EditEventPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'events', element: <EventsPage/>},
            {path: 'events/new', element: <NewEventPage/>},
            {path: 'events/:eventId', element: <EventDetailsPage/>},
            {path: 'events/:eventId/edit', element: <EditEventPage/>},
        ],
    }
])