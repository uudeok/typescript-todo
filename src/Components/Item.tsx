import React, { useState } from 'react';
import "../css/Item.css" ;
import axios from 'axios';

function Item(props) {
    const deleteTodo = (event) => {
        axios.delete(`http://localhost:4500/todos/${props.id}`)
        .then(function(response) {
            props.setTodos(response.data);
        })
    }

    const updateTodo = (event) => {
        axios.put(`http://localhost:4500/todos/${props.id}`, {
            contents : inputValue
        }).then(function(response) {
            props.setTodos(response.data);
        })
    }

    const [inputValue, setInputValue] = useState(props.contents);
    const changeInput = (event) => {
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