import React, { useState } from 'react';
import "../css/Item.css" ;
import axios from 'axios';
import { Todo } from './Layout';

interface Props {
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
    id : number;
    contents : string;
}

function Item(props : Props) {
    const deleteTodo = (event : React.MouseEvent<HTMLButtonElement>) => {
        axios.delete(`http://localhost:4500/todos/${props.id}`)
        .then(function(response) {
            props.setTodos(response.data);
        })
    }

    const updateTodo = (event : React.MouseEvent<HTMLButtonElement>) => {
        axios.put(`http://localhost:4500/todos/${props.id}`, {
            contents : inputValue
        }).then(function(response) {
            props.setTodos(response.data);
        })
    }

    const [inputValue, setInputValue] = useState(props.contents);
    const changeInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    return (
            <div className="list">
                <input 
                    className="content"
                    value={inputValue}
                    type="text" 
                    onChange={changeInput}
                />

                <div className="Btn">
                    <button 
                        className="reviseBtn"
                        onClick={updateTodo}
                    >
                            ✔
                    </button>
                    <button 
                        className="deleteBtn"
                        onClick={deleteTodo}
                    > 
                        ❌
                    </button>
                </div>
            </div>
    )
}

export default Item;