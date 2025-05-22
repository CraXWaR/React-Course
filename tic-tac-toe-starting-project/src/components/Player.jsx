import {useState} from "react";

export default function Player({name, symbol, isTurn}, onChangeName) {
    const [isEditing, setIsEditing] = useState(false);
    const [editPlayerName, setEditPlayerName] = useState(name)

    function handleEdit() {
        setIsEditing((editing) => !editing);
    }

    function handleNameChange(e) {
        setEditPlayerName(e.target.value);

        if (isEditing) {
            onChangeName(symbol, e.target.value);
        }
    }

    let playerName = <span className='player-name'>{editPlayerName}</span>

    if (isEditing) {
        playerName = <input type='text' required value={editPlayerName} onChange={handleNameChange}/>
    }

    return (
        <li className={isTurn ? 'active' : ''}>
            <span className='player'>
                {playerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}