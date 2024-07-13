import React, { useState } from "react";
import axios from "axios";
import api from "./Api";
import Weather from "./Weather";
import Search from "./Search";

function App() {
  const [location, setLocation] = useState("India");

  function handleSearch(query) {
    setLocation(query);
  }
  return (
    <div>
      <Search onSearch={handleSearch} />
      <Weather location={location} />
    </div>
  );
}

export default App;
