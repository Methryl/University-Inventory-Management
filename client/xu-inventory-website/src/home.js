// Home.js
import React, { useState } from 'react'; // Import React and hooks
import './home.css'; 
import SearchBar from './SearchBar'; // Import the SearchBar component

function Home() {
    // Define state for storing search results
    const [searchResults, setSearchResults] = useState([]);

    // Define the handleSearch function
    const handleSearch = (query) => {
        console.log('Searching for:', query);

        // Make a request to the backend API
        fetch(`http://localhost:3001/assets?title=${encodeURIComponent(query)}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('Search results:', data);
                setSearchResults(data); // Set the results to state to use in rendering
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
            });
    };

    return (
        <div>
            <h1>Home</h1>

            {/* Render the SearchBar component */}
            <SearchBar onSearch={handleSearch} />

            {/* Render the search results */}
            <div className="search-results">
                <h3>Search Results</h3>
                <div className="results-container">
                    {searchResults.map((asset) => (
                        <div className="result-card" key={asset.id}>
                            <h4>{asset.title}</h4>
                            <p><strong>Company:</strong> {asset.company}</p>
                            <p><strong>Type:</strong> {asset.asset_type}</p>
                            <p><strong>Serial Number:</strong> {asset.serial_number}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
