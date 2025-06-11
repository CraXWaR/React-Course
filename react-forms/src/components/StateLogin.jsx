import {useState} from 'react';
import Input from "./Input.jsx";
import {hasMinLength, isEmail, isNotEmpty} from "../util/validation.js";
import {useInput} from "../customHooks/useInput.js";

export default function Login() {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredPassword, setEnteredPassword] = useState('');
    // function handleEmailChange(event) {
    //   setEnteredEmail(event.target.value);
    // }
    // function handlePasswordChange(event) {
    //   setEnteredPassword(event.target.value);
    // }
    //
    // function handleInputChange(identifier, value) {
    //     setEnteredValues((prevValues) => ({
    //         ...prevValues, [identifier]: value,
    //     }));
    //     setDidEdit((prevEdit) => ({
    //         ...prevEdit, [identifier]: false,
    //     }));
    // }
    //
    // function handleInputBlur(identifier) {
    //     setDidEdit((prevEdit) => ({
    //         ...prevEdit, [identifier]: true,
    //     }));
    // }
    // const [enteredValues, setEnteredValues] = useState({
    //     email: '', password: '',
    // });
    //
    // const [didEdit, setDidEdit] = useState({
    //     email: false, password: false,
    // });

    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailHasError,
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value));
    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError,
    } = useInput('', (value) => hasMinLength(value, 4));

    function handleSubmit(event) {
        event.preventDefault();
        if (emailHasError || passwordHasError) {
            return;
        }

        console.log(emailValue, passwordValue);
    }

    return (<form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">
            <Input
                label="Email"
                id="email"
                type="email"
                name="email"
                onBlur={handleEmailBlur}
                onChange={handleEmailChange}
                value={emailValue}
                error={emailHasError && 'Incorrect email address!'}
            />

            <Input
                label="Password"
                id="password"
                type="password"
                name="password"
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                value={passwordValue}
                error={passwordHasError && 'Invalid password!'}
            />
        </div>

        <p className="form-actions">
            <button className="button button-flat">Reset</button>
            <button className="button">Login</button>
        </p>
    </form>);
}