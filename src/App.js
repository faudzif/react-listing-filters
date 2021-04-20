import React, { useState } from "react";
import "./App.css";

import Data from "./Data/services.json";

import Filters from "./Components/Filters/Filters";
import ServiceListing from "./Components/ServiceListing/ServiceListing";

function App() {
  return (
    <div className="App">
      <Filters data={Data} />
      <ServiceListing data={Data} />
    </div>
  );
}

export default App;
