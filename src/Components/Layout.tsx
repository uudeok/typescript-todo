import React, { useState, useEffect } from "react";
import "../Css/Layout.css" ;
import Input from "./Input";
import Item from "./Item";
import { getTodoList } from "../todoaxios";


export interface Todo { 
    id : number;
    contents : string;
}

function Layout() {

   useEffect(() => {
    getTodoList().then(function(response){
        setTodos(response);
    })
   },[])

    const [todos, setTodos] = useState<Todo[]>([]);

    return(
        <div className="container">
            <div className="title-box">
                <Input setTodos={setTodos} />
            </div>
            <div className="content-box">
                {todos.map((todo) => {return <Item contents={todo.contents} id={todo.id} setTodos={setTodos} />})}

            </div>
        </div>
    );       
}


export default Layout;