import axios from "axios";

const todoAPI = axios.create({
    baseURL : 'http://localhost:4500/todos'
});

export default todoAPI;