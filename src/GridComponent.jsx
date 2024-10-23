// GridComponent.js

import UserInfo from './components/UserInfo.jsx';
import UserAddress from './components/UserAddress.jsx';
import TodoList from './components/TodoList.jsx';
import Post from './components/Post.jsx';
import './styles/gridStyles.css';  // Import the CSS styles for the grid layout
import {useState} from 'react';

function GridComponent({users, todos, posts, updateUser, updateTodo, updatePost, deleteUser}) {

    const [hover, isHover] = useState(false);

    const handleHover = () => {
        isHover(!hover);
        console.log(hover);
    }

    return (

        // <>hello</>
        <div className="grid-container">
            {/* Repeat UserInfo */}
            {/* eslint-disable-next-line react/prop-types */}
            {users.map((user, index) => (
                <div key={`user-${user.id}`} className="grid-item user-info">
                    <UserInfo
                        userId={user.id}
                        name={user.name}
                        email={user.email}
                        updateUser={(updatedUser) => updateUser(index, updatedUser)}
                        deleteUser={() => deleteUser(index)}
                        handleHover={handleHover}

                    />
                </div>
            ))}

            {/* Repeat UserAddress */}
            {/* eslint-disable-next-line react/prop-types */}

            { users.map((user, index) => (
                hover &&  ( <div key={`address-${user.id}`} className="grid-item user-address">
                      <UserAddress
                        street={user.address.street}
                        city={user.address.city}
                        zipcode={user.address.zipcode}
                        updateUser={(updatedUser) => updateUser(index, updatedUser)}
                    />
                </div>)
            ))}

            {/* Repeat TodoList */}
            {/* eslint-disable-next-line react/prop-types */}
            {todos.map((todo, index) => (
                hover && (<div key={`todo-${index}`} className="grid-item todo-list">
                    <TodoList
                        todoName={todo.title}
                        isDone={todo.isDone}
                        updateTodo={(updatedTodo) => updateTodo(index, updatedTodo)}
                    />
                </div>)
            ))}

            {/* Repeat Post */}
            {/* eslint-disable-next-line react/prop-types */}
            {posts.map((post, index) => (
                hover && (<div key={`post-${index}`} className="grid-item post">
                    <Post
                        title={post.title}
                        body={post.body}
                        updatePost={(updatedPost) => updatePost(index, updatedPost)}
                    />
                </div>)
            ))}
        </div>
    );
}

export default GridComponent;
