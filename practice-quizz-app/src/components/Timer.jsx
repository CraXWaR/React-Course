import {useState, useEffect} from 'react';

export default function Timer({timeout, onTimeout, mode}) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('TIMEOUT');
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('INTERVAL');
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (<progress
        id="question-time"
        max={timeout}
        value={remainingTime}
        className={mode}
    />);
}