import { useState } from "react";
export default function Player({ name, symbol, isActive }) {
    useState();
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // funzione di aggiornamento di stato basata sul valore precedente
        // questa funzione riceve come argomento il valore attuale dello stato e restituisce il nuovo valore dello stato
        setIsEditing((editing) => !editing);

    }
    let playerName = <span className="player-name">{name}</span>
    //let btnCaption = 'Edit';

    if (isEditing) {
        playerName = <input type="text" required value={name} />
        //let btnCaption = 'Save';
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerName}

                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}