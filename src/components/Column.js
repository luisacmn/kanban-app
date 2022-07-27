import React from "react"
import { useState } from "react"
import Card from "../components/Card";
import "./column.css"

const Column = ( {title} ) => {
    const [arr, setArr] = useState([]);                 //Array de itens. Cada item criará um elemento DOM/Componente (Card)
    const [counter, setCounter] = useState(0)           //Contador para acrescentar ao array de itens. 
    const [value, setValue] = useState()
    
    const createCard = () => {                         //Criar um array com items(números). Para cada item, 
        setCounter(counter + 1)
        setArr((prev) => {
            return [...prev, {value: counter, completed: false, id: Math.random() * 100}];
        });
        console.log(arr)
    }

    const handleRemove = (id) => {
        console.log(id)
        setCounter(counter - 1)                                   //Setar o contador. Setar o arr para conter os elements diferentes do filtrado                                           
        
        const newArr = arr.filter((item) => item.id !== id);    //O novo array passa a ser os elementos com id diferentes do selecionado
        setArr(newArr);
    }                                                    

    return (
        <div className="col-lg-4 col">
            <h3 className={title}>{title}</h3>
            <p>Tasks: {counter}</p>
            <button onClick={createCard} className="add-button">+</button>
            {arr.map((item) => (
                <Card key={item.id} onClick={() => handleRemove(item.id)} />
            ))}

        </div>
    )
}

export default Column;

