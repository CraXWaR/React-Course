import {useRef, useState} from "react";

export default function Player() {
    const playerName = useRef();
    const [inputPlayerName, setInputPlayerName] = useState("");

    function handleSubmit() {
        setInputPlayerName(playerName.current.value);
        playerName.current.value = "";
    }

    return (<section id="player">
            <h2>Welcome {inputPlayerName ?? "unknown player"}</h2>
            <p>
                <input ref={playerName} type="text"/>
                <button onClick={handleSubmit}>Set Name</button>
            </p>
        </section>);
}
