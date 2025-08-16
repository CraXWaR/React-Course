import classes from './Post.module.css';
import {Link} from "react-router-dom";

export default function Post(props) {
    return (<li className={classes.post}>
        <Link to={`/edit-post/${props.id}`}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.text}</p>
        </Link>
    </li>);
}