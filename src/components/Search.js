import React from "react";
import "./Search.css";
function Search(props) {
  return (
    <div className="search__input">
      <input
        placeholder="Search Movies"
        value={props.input}
        type="text"
        onChange={(e) => props.setInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
