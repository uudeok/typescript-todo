import React, { useState } from 'react';
import "../Css/Item.css" ;
import { Todo } from './Layout';
import { deleteTodo, updateTodo } from '../todoaxios';



interface Props {
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
    id : number;
    contents : string;
}

function Item(props : Props) {

  
    const deleteBtn = async (event : React.MouseEvent<HTMLButtonElement>) => {
        const data = await deleteTodo(props.id)  
        props.setTodos(data);
    }
        
    const updateBtn = async (event : React.MouseEvent<HTMLButtonElement>) => {
        const data = await updateTodo(props.id, inputValue)
        props.setTodos(data);
    }
    const changeInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const [inputValue, setInputValue] = useState(props.contents);
    

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
                        onClick={updateBtn}
                    >
                            ✔
                    </button>
                    <button 
                        className="deleteBtn"
                        onClick={deleteBtn}
                    > 
                        ❌
                    </button>
                </div>
            </div>
    )
 }

export default Item;