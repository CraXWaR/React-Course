import {useRef, useState} from "react";
import ChallengeResultModal from "./ChallengeResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

    const isActiveTimer = remainingTime > 0 && remainingTime < targetTime * 1000;

    if (remainingTime <= 0) {
        clearInterval(timer.current);
        dialog.current.showModal();
    }

    function handleTimeReset() {
        setRemainingTime(targetTime * 1000);
    }

    function handleStartChallenge() {
        timer.current = setInterval(() => {
            setRemainingTime(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStopChallenge() {
        dialog.current.showModal();
        clearInterval(timer.current);
    }

    return (<>
        <ChallengeResultModal ref={dialog} targetTime={targetTime} timeRemaining={remainingTime}
                              onReset={handleTimeReset}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} seconds{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={isActiveTimer ? handleStopChallenge : handleStartChallenge}>
                    {isActiveTimer ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={isActiveTimer ? 'active' : ''}>
                {isActiveTimer ? 'Time is running...' : 'Timer inactive.'}
            </p>
        </section>
    </>);
}