// UserAddress.js
import '../styles/ComponentsStyles.css';
// eslint-disable-next-line react/prop-types
function UserAddress({ street, city, zipcode, updateUser }) {
    const handleUpdate = () => {
        const updatedStreet = prompt('Enter new street:', street);
        if (updatedStreet) {
            updateUser({ address: { street: updatedStreet, city, zipcode } });
        }
    };

    return (
        <div className="component-container">
            <h3>User Address</h3>

            <div className="component-row">
                <label>Street:</label>
                <p>{street}</p>
            </div>

            <div className="component-row">
                <label>City:</label>
                <p>{city}</p>
            </div>

            <div className="component-row">
                <label>Zip Code:</label>
                <p>{zipcode}</p>
            </div>

            <button onClick={handleUpdate} className="component-button">Update Address</button>
        </div>
    );
}

export default UserAddress;
