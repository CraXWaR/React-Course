import img from '../assets/quiz-logo.png';

export default function Header() {
    return (<header>
            <img src={img} alt="Logo Image"/>
            <h1>React Practice Quiz</h1>
        </header>);
}