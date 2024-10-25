// UserInfo.js

import '../styles/ComponentsStyles.css';
import {useState} from 'react';
// eslint-disable-next-line react/prop-types
function UserInfo({ userId, name, email, updateUser, deleteUser ,  handleMouseOver, handleMouseLeave}) {

    const originalColor = "rgb( 0, 39, 254)";

    const handleUpdate = () => {
        const updatedName = prompt('Enter new name:', name);
        if (updatedName) {
            updateUser({ userId, name: updatedName, email });
        }
    };

    const [idColor , setIdColor] = useState("rgb( 0, 39, 254)");

    const handleIdColor = () => {
        if(idColor === originalColor)
                // red color
                setIdColor("rgb(254,9,0");
        else
            setIdColor(originalColor);
    }


    return (
        // <div className="component-container" style={{color: idColor}}>
         <div className="component-container" style={{background: idColor}}>

            <h3>User Info</h3>
            <div className="component-row">
                <label onClick={handleIdColor}>ID:</label>
                <p >{userId}</p>
            </div>

            <div className="component-row">
                <label>Name:</label>
                <p>{name}</p>
            </div>

            <div className="component-row">
                <label>Email:</label>
                <p>{email}</p>
            </div>

            <button onClick={handleUpdate} className="component-button">Update User</button>
            <button onClick={deleteUser} className="component-button delete-btn">Delete User</button>
            <button onMouseEnter={()=>handleMouseOver(userId)} onMouseLeave={handleMouseLeave} className="component-button moreinfo-btn"><h3>Other Data</h3></button>

        </div>
    );
}

export default UserInfo;
