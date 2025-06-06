import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

export default function Summary({userAnswers}) {
    const skippedAnswers = userAnswers.filter((answer) => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

    const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * 100);
    const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * 100);
    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

    return (<div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon"/>
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
            <p>
                <span className="number">{skippedAnswersShare}%</span>
                <span className="text">skipped</span>
            </p>
            <p>
                <span className="number">{correctAnswersShare}%</span>
                <span className="text">answered correctly</span>
            </p>
            <p>
                <span className="number">{wrongAnswersShare}%</span>
                <span className="text">answered incorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((userAnswer, index) => {
                let answerClass = 'user-answer'
                if (userAnswer === null) {
                    answerClass += ' skipped';
                } else if (userAnswer === QUESTIONS[index].answers[0]) {
                    answerClass += ' correct';
                } else {
                    answerClass += ' wrong';
                }

                return (<li key={index}>
                    <h3>{index + 1}</h3>
                    <p className="question">{QUESTIONS[index].text}</p>
                    <p className={answerClass}>{userAnswer ?? 'Answer skipped'}</p>
                </li>);
            })}
        </ol>
    </div>);
}