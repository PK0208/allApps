import { useState, useEffect } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import AppBar from "./components/AppBarComponent/AppBarComponent";
import axios from "axios";
function App() {
  useEffect(() => {
    console.log("UseEffect App");
  }, []);

  return (
    <div className="App">
      <SearchBar />
      <AppBar />
    </div>
  );
}

export default App;
