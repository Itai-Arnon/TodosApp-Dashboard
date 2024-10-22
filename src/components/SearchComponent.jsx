import React, { useState } from 'react';
import '../styles/componentsStyles.css'; // Import any styles if necessary

function SearchComponent({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value); // Pass the search term to parent component
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search users by name..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
        </div>
    );
}

export default SearchComponent;
