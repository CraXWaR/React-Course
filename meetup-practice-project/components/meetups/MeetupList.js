import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
    return (<section className={classes.container}>
        <ul className={classes.grid}>
            {props.meetups.map((meetup) => (<MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                />))}
        </ul>
    </section>);
}

export default MeetupList;