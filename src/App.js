import React, { useState } from "react";
import "./App.css";

import Data from "./Data/services.json";
// import Data2 from "./Data/countries.json";

import Filters from "./Components/Filters/Filters";

import SearchListing from "./Components/SearchListing/SearchListing";

// import CountryListing from "./Components/CountryListing/CountryListing";

function App() {
  // const [secondDD, setSecondDD] = useState(false);

  return (
    <div className="App">
      <Filters data={Data} />
      {/* <SearchListing Data={Data} searchValue={searchValue} /> */}
      {/* <CountryListing countries={Data2} /> */}
    </div>
  );
}

export default App;
