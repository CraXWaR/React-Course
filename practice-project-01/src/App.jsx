import Header from "./components/Header.jsx";
import UserInputs from "./components/UserInputs.jsx";
import {Result} from "./components/Result.jsx";
import {useState} from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 100000, annualInvestment: 12000, expectedReturn: 12, duration: 20,
    });

    const isValidInput = userInput.duration >= 1

    function handleInputChange(inputName, value) {
        setUserInput(prevInput => {
            return {...prevInput, [inputName]: +value};
        });
    }

    return (<>
        <Header/>
        <UserInputs
            inputFunction={handleInputChange}
            userInput={userInput}/>
        {!isValidInput && <p className="center">Please enter a valid duration</p>}
        {isValidInput && <Result input={userInput}/>}
    </>);
}

export default App
