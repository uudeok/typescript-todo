import React,{ useState, useEffect } from "react";
import "../Css/Layout.css" ;
import Input from "./Input";
import Item from "./Item";
import todoAPI from "../todoaxios";

export interface Todo { 
    id : number;
    contents : string;
}

function Layout() {

    const getTodoList = async () => {
        const { data } = await todoAPI<Todo[]>('/');
          setTodos(data);
    }

    // const getTodoList = async () => {
    //     const { data } = await axios.get<Todo[]>(
    //        'http://localhost:4500/todos'      
    //       );
    //       setTodos(data);
    // }
  
   useEffect(() => {
    getTodoList();
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