import React from "react";
import "./SearchBar.css";
import TextField from "@material-ui/core/TextField";

function SearchBar() {
  return (
    <div>
      <TextField className="searchField" variant="outlined" />
    </div>
  );
}

export default SearchBar;
