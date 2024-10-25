// GridComponent.js

import UserInfo from './components/UserInfo.jsx';
import UserAddress from './components/UserAddress.jsx';
import TodoList from './components/TodoList.jsx';
import Post from './components/Post.jsx';
import './styles/gridStyles.css';  // Import the CSS styles for the grid layout


// eslint-disable-next-line react/prop-types
function GridComponent({
                           users,
                           todos,
                           posts,
                           updateUser,
                           deleteUser,
                           handleMouseOver,
                           handleMouseLeave,
                           updateTodo,
                           updatePost,
                           selectedIndex

                       }) {
    //  todos,posts,        updateTodo,   updatePost,
    // {    selectedIndex && ( <h1>Selected Index: {selectedIndex}</h1>  )     }

    return (
        <div className="grid-container">
            {/* eslint-disable-next-line react/prop-types */}
            {users.map((user, index) => (
                <div key={`user-${user.id}`} className="grid-item user-info">
                    <UserInfo
                        userId={user.id}
                        name={user.name}
                        email={user.email}
                        updateUser={(updatedUser) => updateUser(index, updatedUser)}
                        deleteUser={() => deleteUser(index)}
                        handleMouseOver={handleMouseOver}
                        handleMouseLeave={handleMouseLeave}
                        selectedIndex={selectedIndex}
                    />
                </div>
            ))
            }

            )

            {selectedIndex &&
                (users
                    .filter(user => user.id === selectedIndex)
                    .map((user, index) => (
                        <div key={`address-${user.id}`} className="grid-item user-address">
                            <UserAddress
                                street={user.address.street}
                                city={user.address.city}
                                zipcode={user.address.zipcode}
                                updateUser={(updatedUser) => updateUser(index, updatedUser)}
                            />
                        </div>
                    )))}
            {selectedIndex &&
                (users

                    .filter(user => user.id === selectedIndex)
                    .map((user, index) => (
                        <div key={`address-${user.id}`} className="grid-item user-address">

                            <UserAddress
                                street={user.address.street}
                                city={user.address.city}
                                zipcode={user.address.zipcode}
                                updateUser={(updatedUser) => updateUser(index, updatedUser)}
                            />
                        </div>
                    )))}


            {selectedIndex &&
                todos
                    .filter(user => user.id === selectedIndex)
                    .map((todo, index) => (
                        <div key={`todo-${index}`} className="grid-item todo-list">
                            <TodoList
                                todoName={todo.title}
                                isDone={todo.isDone}
                                updateTodo={(updatedTodo) => updateTodo(index, updatedTodo)}
                            />
                        </div>
                    ))}

            {selectedIndex &&
                posts
                    .filter(user => user.id === selectedIndex)
                    .map((post, index) => (
                        <div key={`todo-${index}`} className="grid-item todo-list">
                            <Post
                                todoName={post.title}
                                isDone={post.body}
                                updatePost={(updatedPost) => updatePost(index, updatedPost)}
                            />
                        </div>
                    ))}

        </div>
    );
}


export default GridComponent;
