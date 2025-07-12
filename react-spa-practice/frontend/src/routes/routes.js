import {createBrowserRouter} from "react-router-dom";

import RootLayout from "../pages/RootLayout";

import HomePage from "../pages/HomePage";
import EventDetailsPage from "../pages/EventDetailsPage";
import EventsPage from "../pages/EventsPage";
import NewEventPage from "../pages/NewEventPage";
import EditEventPage from "../pages/EditEventPage";
import EventLayout from "../pages/EventLayout";
import NewsletterPage, {action as newsletterAction} from "../pages/NewsletterPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {
                path: 'events', element: <EventLayout/>,
                children: [
                    {index: true, element: <EventsPage/>},
                    {path: 'new', element: <NewEventPage/>},
                    {path: ':eventId', element: <EventDetailsPage/>},
                    {path: ':eventId/edit', element: <EditEventPage/>},
                ]
            },
            {path: 'newsletter', element: <NewsletterPage/>, action: newsletterAction,}
        ],
    }
])