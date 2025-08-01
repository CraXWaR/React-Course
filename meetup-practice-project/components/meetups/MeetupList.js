import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
    return (<section className={classes.container}>
            <ul className={classes.grid}>
                {props.meetups.map((meetup) => (<li key={meetup.id} className={classes.card}>
                        <MeetupItem
                            id={meetup.id}
                            image={meetup.image}
                            title={meetup.title}
                            address={meetup.address}
                        />
                    </li>))}
            </ul>
        </section>);
}

export default MeetupList;