import React, {useState} from "react"
import "./card.css"

const Card = ( ) => {
    const [input, setInput] = useState("");             //Armazenar o que é digitado no Input
    const [task, setTask] = useState([])

    const inputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="task-card">
            <input onChange={inputChange}/>
            <p>{task}</p>
        </div>
    )
}

export default Card;