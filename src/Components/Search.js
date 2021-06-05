import React from "react";

import "./Styling/Search.css";

function Search() {
  return (
    <div className="Search">
      <h3>Please search for city here</h3>
      <form className="search-field" id="search-form">
        <input
          type="text"
          id="search-input"
          placeholder="Enter a city"
          autofocus="on"
          autocomplete="off"
        />
        <input type="submit" value="search" className="submit-button" />
      </form>
    </div>
  );
}

export default Search;