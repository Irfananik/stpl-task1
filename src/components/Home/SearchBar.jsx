import React, { useState } from "react";
import './SearchBar.css'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle input changes
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    // Perform your search logic here
    // For now, let's just update the searchResults state with the search term
    setSearchResults([searchTerm]);
  };

  return (
    <div className="shadow-xl search-bar-background-color rounded-md p-3 md:flex">
      <div className="bg-white rounded-lg search-bar-input-width search-bar-input-height shadow-xl p-2">
        <input
          className=""
          type="text"
          placeholder="Enter your search item"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="ms-6" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* search menu */}
      <div className="md:flex md:items-center md:justify-center md:ms-6">
        <ul className="md:flex">
            <li className="cursor-pointer">Relevence</li>
            <li className="md:ms-6 cursor-pointer">All brand</li>
        </ul>
      </div>
    </div>
  );
};

export default Searchbar;
