import React, { useState } from "react";
import "./App.css";

import Data from "./Data/services.json";

import Filters from "./Components/Filters/Filters";
import ServiceListing from "./Components/ServiceListing/ServiceListing";

function App() {
  const [secondDD, setSecondDD] = useState(false);
  const [count, setCount] = useState(-1);
  const [searchValue, setSearchValue] = useState("");

  function handleChange(e) {
    let currentValue = e.target.value;
    if (currentValue !== "") {
      setCount(currentValue);
      setSecondDD(true);
      let categoryGroup = document.getElementsByClassName("category-group");

      for (let i = 0; i < categoryGroup.length; i++) {
        // console.log("log");
        categoryGroup[i].style.display = "none";
        // debugger;
        /*  if (currentValue === i) {
          categoryGroup[i].style.display = "block";
        } else {
          categoryGroup[i].style.display = "none";
        } */
      }
    } else {
      setSecondDD(false);
    }
  }

  function handleSearch(e) {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }

  return (
    <div className="App">
      <Filters
        search={handleSearch}
        change={handleChange}
        secondDD={secondDD}
        count={count}
        searchValue={searchValue}
        data={Data}
      />
      <ServiceListing searchValue={searchValue} data={Data} />
    </div>
  );
}

export default App;
