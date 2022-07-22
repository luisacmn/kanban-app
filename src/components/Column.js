import React from "react"
import { useState } from "react"
import Card from "../components/Card";

const Column = ( {title} ) => {
    
    const [arr, setArr] = useState([]);                 //Array de itens. Cada item criará um elemento DOM/Componente (Card)
    const [counter, setCounter] = useState(0)           //Contador para acrescentar ao array de itens. 

    const createCard = () => {                         //Criar um array com items(números). Para cada item, 
        setCounter(counter + 1)
        setArr((prev) => {
            return [...prev, counter];
        });
    }

    return (
        <div className="col-lg-4">
            <h3>{title}</h3>
            <button onClick={createCard} className="button">+</button>
            <p>{counter}</p>
            {arr.map((i) => {
                return (
                    <ul>
                        <Card key={i} />
                    </ul>
                );
            })}

        </div>
    )
}

export default Column;