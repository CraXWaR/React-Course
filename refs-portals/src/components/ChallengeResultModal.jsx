import {createPortal} from "react-dom";

export default function ChallengeResultModal({targetTime, ref, timeRemaining, onReset}) {
    const lost = timeRemaining <= 0;
    const formatedTime = (timeRemaining / 1000).toFixed(2);
    const score = ((1 - timeRemaining / (targetTime * 1000)) * 100).toFixed(2);

    return createPortal(<dialog className='result-modal' ref={ref} onClose={onReset}>
        {lost && <h2>You lost</h2>}
        {!lost && <h2>You won: Score {score}</h2>}
        <p>Your time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{formatedTime} seconds left.</strong></p>

        <form method='dialog' onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>, document.getElementById('modal'));
}