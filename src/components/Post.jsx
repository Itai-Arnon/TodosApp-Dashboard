// Post.js
import React from 'react';
import '../styles/ComponentsStyles.css';
function Post({ title, body, updatePost }) {
    const handleUpdate = () => {
        const updatedTitle = prompt('Enter new post title:', title);
        const updatedBody = prompt('Enter new post body:', body);
        if (updatedTitle && updatedBody) {
            updatePost({ title: updatedTitle, body: updatedBody });
        }
    };

    return (
        <div className="component-container">
            <h3>Post</h3>

            <div className="component-row">
                <label>Title:</label>
                <p>{title}</p>
            </div>

            <div className="component-row">
                <label>Body:</label>
                <p>{body}</p>
            </div>

            <button onClick={handleUpdate} className="component-button">Update Post</button>
        </div>
    );
}

export default Post;
