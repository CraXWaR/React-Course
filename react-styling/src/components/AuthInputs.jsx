import {useState} from 'react';

// styles lib
import {styled} from "styled-components";
import Button from "./Button.jsx";
import CustomInput from "./Input.jsx";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;`

export default function AuthInputs() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(identifier, value) {
        if (identifier === 'email') {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes('@');
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    return (<div id="auth-inputs">
        <Container>
            <p>
                <CustomInput
                    label="Email"
                    invalid={emailNotValid}
                    type="email"
                    onChange={(event) => handleInputChange('email', event.target.value)}
                />
            </p>
            <p>
                <CustomInput
                    label="Password"
                    invalid={passwordNotValid}
                    type="password"
                    onChange={(event) => handleInputChange('password', event.target.value)}
                />
            </p>
        </Container>
        <div className="actions">
            <button type="button" className="text-button">
                Create a new account
            </button>
            <Button onClick={handleLogin}>Sign In</Button>
        </div>
    </div>);
}
