import React from 'react';

function SearchComponent({ onSearch }) {
    const handleSearch = (event) => {
        onSearch(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search users..."
            onChange={handleSearch}
        />
    );
}

export default SearchComponent;