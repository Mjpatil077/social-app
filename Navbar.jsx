import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Dummy search results for demonstration
  const searchResults = [
    'Result 1',
    'Result 2',
    'Result 3',
    'Result 4',
    'Result 5',
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowResults(e.target.value.length > 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="company-name">COMMUNIFY.</h1>
          <h3>Beta</h3>
        </div>
        <div className="navbar-center">
          <div className="search-container">
            <input
              type="text"
              className="search-box"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {showResults && (
              <div className="search-results">
                {searchResults.map((result, index) => (
                  <div key={index} className="search-result-item">
                    {result}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="navbar-right">
          <button className="logout-button">Log out</button>
          <div className="user-profile">
            <img src="src\assets\avatar.jpg" alt="User profile" className="profile-image" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;