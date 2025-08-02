import classes from './MeetupDetail.module.css';

export default function MeetupDetails(props) {
    return (<section className={classes.detail}>
        <div className={classes.imageWrapper}>
            <img className={classes.image} src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
            <h1 className={classes.title}>{props.title}</h1>
            <address className={classes.address}>{props.address}</address>
            <p className={classes.details}>{props.description}</p>
        </div>
    </section>);
}
