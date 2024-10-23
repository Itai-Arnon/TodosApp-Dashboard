import {useState, useEffect} from 'react';
import GridComponent from './GridComponent';
import {getAllUsers, getAllPosts, getAllTodos} from './utils/utils.js';
import SearchComponent from './components/SearchComponent';


function TodoMain() {

    // Users Array
    const [users, setUsers] = useState([]);
    //  Todos Array
    const [todos, setTodos] = useState([]);

    // Posts Array
    const [posts, setPosts] = useState([]);
    //state for Search Term
    const [searchTerm, setSearchTerm] = useState('');
    //Filtered User - users after search
    const [filteredUsers, setFilteredUsers] = useState([]);

    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const [selectedIndex, setSelectedIndex] = useState(null);

    const [hover, setHover] = useState(false);

    if (!searchTerm)
        console.log("searchTerm Error");
    else
        console.log("searchTerm:", searchTerm);

    useEffect(() => {

        // Fetch users, posts, and todos on component mount
        const fetchData = async () => {
            const usersData = await getAllUsers();
            const postsData = await getAllPosts();
            const todosData = await getAllTodos();
            if (usersData.outcome === true && postsData.outcome === true && todosData.outcome === true) {
                setUsers(usersData.res);
                setPosts(postsData.res);
                setTodos(todosData.res);
            } else {
                _message("Failed to fetch data");
            }
        }
        fetchData();

    }, []);

    useEffect(() => {
        const results = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(results);
        console.log("Filtered Users", results);

    }, [searchTerm, users]);

    useEffect(() => {
        setUsers(users.find(user => user.id === selectedIndex))
        setTodos(todos.find(todo => todo.userId === selectedIndex));
        setPosts(posts.find(post => post.userId === selectedIndex));

    },[selectedIndex  ]);

// display various status of app messages
    const _message = (msg) => {
        setMessage(msg);
        setShowMessage(true);
    }


    // Update user handler
    const updateUser = (index, updatedUser) => {
        const newUsers = [...users];
        newUsers[index] = updatedUser;
        setUsers(newUsers);
    };

    // Update todo handler
    const updateTodo = (index, updatedTodo) => {
        const newTodos = [...todos];
        newTodos[index] = updatedTodo;
        setTodos(newTodos);
    };

    // Update post handler
    const updatePost = (index, updatedPost) => {
        const newPosts = [...posts];
        newPosts[index] = updatedPost;
        setPosts(newPosts);
    };

    // Delete user handler
    const deleteUser = (index) => {
        const newUsers = users.filter((_, i) => i !== index);
        setUsers(newUsers);
    };
    const handleMouse = (userId) => {
        setHover(!hover);
        setSelectedIndex(userId);
    }

    return (
        <div className="dashboard">
            <h1>Todo Dashboard</h1>
            {showMessage && <div><h3 className="message">{message}</h3></div>}
            {/* SearchComponent for filtering users setSearch term is the function address passed*/}
            <SearchComponent onSearch={() => setSearchTerm(searchTerm)}/>
            {/* Pass arrays and handlers to GridComponent */}
            <GridComponent
                users={filteredUsers}
                todos={todos}
                posts={posts}
                updateUser={updateUser}
                updateTodo={updateTodo}
                updatePost={updatePost}
                deleteUser={deleteUser}
                handleMouseOver={handleMouse}
                handleMouseLeave={handleMouse}
                hover = {hover}
            />
        </div>
    );
}

export default TodoMain;
