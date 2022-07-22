import { useState } from "react"
import "./kanban.css"

const Kanban = () => {

    const [arr, setArr] = useState([]);                 //Array de itens.
    
    const [counter, setCounter] = useState(0)           //Contador para acrescentar ao array de itens. 

    const createInput = () => {                         //Add input. Criar um array com items(números). Para cada item, 
        setCounter(counter + 1)
        setArr(() => {
            return ["item"];
        });
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <h3>Todo</h3>
                    <button onClick={createInput} className="button">+</button>
                    <p>{counter}</p>
                    {arr.map((item, i) => {
                        return (
                            <ul>
                                <input
                                    value={item.value}
                                    id={i}
                                    type={item.type}
                                />
                            </ul>
                        );
                    })}

                </div>
            </div>
        </div>
    )
}

export default Kanban;

/*
    {
        card.map((item, index) =>                               //Para cada item armazenado na variável, criar um elemento DOM
            <div className="col-lg-4" key={index}>
                <h3>{item.name}</h3>
                <button className="button" onClick={handleClick} value={index}>+</button>
            </div>
        )
    } 
*/