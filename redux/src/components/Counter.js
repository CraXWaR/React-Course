import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({type: 'INCREMENT'});
    };

    const decrement = () => {
        dispatch({type: 'DECREMENT'});
    };

    const toggleCounterHandler = () => {
    };

    return (<main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>-- {counter} --</div>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>);
};

export default Counter;
