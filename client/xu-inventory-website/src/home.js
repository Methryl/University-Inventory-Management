import React, { useState } from 'react'; 
import './home.css'; 
import SearchBar from './SearchBar'; 

function Home() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); 

    const handleSearch = (query) => {
        setSearchQuery(query); 
        console.log('Searching for:', query);

        fetch(`http://localhost:3001/assets?title=${encodeURIComponent(query)}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('Search results:', data);
                setSearchResults(data); 
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
            });
    };

    return (
        <div>
            <h1>Home</h1>

            <SearchBar onSearch={handleSearch} />

            <div className="search-results">
                <h3>Search Results</h3>
                {searchResults.length === 0 && searchQuery ? (
                    <p className="no-results">No results found for "{searchQuery}".</p>
                ) : (
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
                )}
            </div>
        </div>
    );
}

export default Home;
