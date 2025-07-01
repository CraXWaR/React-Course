import {NavLink} from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (<header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li>
                    <NavLink to='/' end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/events">Events</NavLink>
                </li>
                <li>
                    <NavLink to="/events/new">Create Event</NavLink>
                </li>
                <li>
                    <NavLink to="/events/1/edit">Edit Event</NavLink>
                </li>
                <li>
                    <NavLink to="/events/1">Event Details</NavLink>
                </li>
            </ul>
        </nav>
    </header>);
}

export default MainNavigation;
