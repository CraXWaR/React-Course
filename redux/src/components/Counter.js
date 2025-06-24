import {useDispatch, useSelector} from "react-redux";

import classes from './Counter.module.css';

import {counterActions} from "../store/counter-slice";

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter);
    const toggleCounter = useSelector((state) => state.counter.showCounter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const increase = () => {
        dispatch(counterActions.increase(10));
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (<main className={classes.counter}>
        <h1>Redux Counter</h1>
        {toggleCounter && <div className={classes.value}>-- {counter} --</div>}
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={increase}>Increase by 10</button>
            <button onClick={decrement}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>);
};

export default Counter;
