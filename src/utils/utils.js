import axios from 'axios';

// Base URLs for API
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

// Fetch all users
 const getAllUsers = async () => {
     try {
         const {data:users} = await axios.get(USERS_URL);
         return {outcome: true, msg: "Users Fetch Success", res: users}
     } catch (error) {
         return   {  outcome: false, msg: `An error occurred reading ${error}`, res: null   }
     }
 };

// Fetch all posts
     const getAllPosts = async () => {
        try {
            const {data:posts} = await axios.get(POSTS_URL);
            return {outcome: true, msg: "Users Fetch Success", res: posts}
        } catch (error) {
            return {outcome: false, msg: `An error occurred reading ${error}`, res: null}
        }
    };
// Fetch all todos
     const getAllTodos = async () => {
        try {
            const {data:todos} = await axios.get(TODOS_URL);
            return {outcome: true, msg: "Users Fetch Success", res: todos}
        } catch (error) {
            return {outcome: false, msg: `An error occurred reading ${error}`, res: null}
        }
    };

    export { getAllUsers, getAllPosts, getAllTodos };

