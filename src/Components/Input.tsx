import React, { useState } from 'react';
import "../Css/Input.css" ;
import { Todo } from './Layout';
import { postTodoList } from '../todoaxios';

interface Props {
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}

function Input(props : Props) {
    const [content, setContent] = useState("");

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    }

    const handleSubmit = async (event : React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const data = await postTodoList(content);
        props.setTodos(data);
        setContent("");
    }

    return (
        <form className="form">
            <input 
                className="input"
                type="text" 
                placeholder="write your to do" 
                value={content}
                onChange={handleChange}
            />
            <button 
                className="button" 
                onClick={handleSubmit}
            > 
                입력
            </button>
        </form>
 );
}

export default Input;