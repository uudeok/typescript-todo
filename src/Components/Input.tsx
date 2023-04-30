import React, { useState } from 'react';
import "../Css/Input.css" ;
import { Todo } from './Layout';
import todoAPI from "../todoaxios";

interface Props {
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}

function Input(props : Props) {
    const [content, setContent] = useState("");


    const postTodoList = async () => {
        const { data } = await todoAPI.post<Todo[]>("/", 
        {
                contents: content,
                id: (Math.random() + 1) * 100000000,
        }); 
        props.setTodos(data);
        setContent("");
    }

    // const postTodoList = async () => {
    //     const { data } = await axios.post<Todo[]>("http://localhost:4500/todos", 
    //     {
    //             contents: content,
    //             id: (Math.random() + 1) * 100000000,
    //     }); 
    //     props.setTodos(data);
    //     setContent("");
    // }

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    }

    const handleSubmit = async (event : React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        postTodoList();
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