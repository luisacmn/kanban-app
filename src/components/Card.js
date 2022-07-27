import React, { useState } from "react"
import { TiDelete } from 'react-icons/ti';

import "./card.css"

const Card = ({ onClick }) => {
    const [input, setInput] = useState("task...");             //Armazenar o que é digitado no Input

    const inputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="task-card">
            <input type="checkbox" className="checkbox" />
            <input type="text" onChange={inputChange}/>
            <button onClick={onClick} className="del-btn"><TiDelete size={20} autofocus/></button>
        </div>
    )
}

export default Card;