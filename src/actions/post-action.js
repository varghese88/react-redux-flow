 
import axios from "axios";

export const getPosts = () =>({
    type: 'GET_POST',
    payload:axios.get("https://jsonplaceholder.typicode.com/posts")
});

export const removePost = (payload) => ({
    type: 'REMOVE_POST',
    payload:payload
});
