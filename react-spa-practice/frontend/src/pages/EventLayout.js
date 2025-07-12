import EventsNavigation from "../components/EventsNavigation";
import {Outlet} from "react-router-dom";

function RootLayout() {
    return (<>
        <EventsNavigation/>
        <Outlet/>
    </>);
}

export default RootLayout;