import axios from "axios";
import { Todo } from "../src/Components/Layout";

const todoAPI = axios.create({
    baseURL : 'http://localhost:4500/todos'
});



 export const deleteTodo = async (id : number) : Promise<Todo[]> => {
    const { data } = await todoAPI.delete<Todo[]>(`/${id}`)
    return data;
 }


 export const updateTodo = async(id : number, inputValue : string) : Promise<Todo[]>=> {
    const { data } = await todoAPI.put<Todo[]>(`/${id}`, {
        contents : inputValue
    })
    return data;
}


 export const postTodoList = async (content : string) : Promise<Todo[]> => {
    const { data } = await todoAPI.post<Todo[]>("/", 
    {
            contents: content
    }); 
    return data;
}


 export const getTodoList = async () : Promise<Todo[]> => {
    const { data } = await todoAPI.get<Todo[]>('/');
    return data;
}