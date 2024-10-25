// eslint-disable-next-line react/prop-types
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