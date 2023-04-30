import React, { useState } from 'react';
import "../Css/Item.css" ;
import { Todo } from './Layout';
import todoAPI from "../todoaxios";

interface Props {
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
    id : number;
    contents : string;
}

function Item(props : Props) {

    const [inputValue, setInputValue] = useState(props.contents);

    const deleteTodo = async (event : React.MouseEvent<HTMLButtonElement>) => {
        const { data } = await todoAPI.delete<Todo[]>(`/${props.id}`)
        props.setTodos(data);
    }

    const updateTodo = async (event : React.MouseEvent<HTMLButtonElement>) => {
        const { data } = await todoAPI.put<Todo[]>(`/${props.id}`, {
            contents : inputValue
        })
        props.setTodos(data);
        }

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