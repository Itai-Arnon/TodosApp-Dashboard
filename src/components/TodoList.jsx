// TodoList.js
import '../styles/ComponentsStyles.css';
// eslint-disable-next-line react/prop-types
function TodoList({ todoName, isDone, updateTodo }) {
    const handleUpdate = () => {
        const updatedTodo = prompt('Enter new todo name:', todoName);
        const updatedIsDone = confirm('Is this todo completed?');
        if (updatedTodo) {
            updateTodo({ name: updatedTodo, isDone: updatedIsDone });
        }
    };

    return (
        <div className="component-container">
            <h3>Todo List</h3>

            <div className="component-row">
                <label>Task Name:</label>
                <p>{todoName}</p>
            </div>

            <div className="component-row">
                <label>Status:</label>
                <p>{isDone ? 'Done' : 'Not Done'}</p>
            </div>

            <button onClick={handleUpdate} className="component-button">Update Todo</button>
        </div>
    );
}

export default TodoList;
