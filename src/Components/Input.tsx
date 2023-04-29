import React, { useState } from 'react';
import "../css/Input.css" ;
import axios from "axios";


function Input(props) {
    const [content, setContent] = useState("");

    const handleChange = (event) => {
        setContent(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:4500/todos", 
        {
                contents: content,
                id: (Math.random() + 1) * 100000000,
        }); 
        props.setTodos(response.data);
        
        // .then(function(response) {
        //     props.setTodos(response.data)
        // })
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