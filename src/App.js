import React, { useState } from "react";
import "./App.css";

import Data from "./Data/services.json";
// import Data2 from "./Data/countries.json";

import Filters from "./Components/Filters/Filters";
import ServiceListing from "./Components/ServiceListing/ServiceListing";
import SearchListing from "./Components/SearchListing/SearchListing";

// import CountryListing from "./Components/CountryListing/CountryListing";

function App() {
  const [secondDD, setSecondDD] = useState(false);
  const [count, setCount] = useState(-1);
  const [searchValue, setSearchValue] = useState("Application");

  function handleChange(e) {
    const currentValue = e.target.value;
    if (currentValue !== "") {
      setCount(currentValue);
      setSecondDD(true);
      const categoryGroup = document.getElementsByClassName("category-group");

      setTimeout(function () {
        for (let i = 0; i < categoryGroup.length; i++) {
          // console.log("log");
          categoryGroup[i].style.display = "none";
          // debugger;
          if (parseInt(currentValue) === i) {
            categoryGroup[i].style.display = "block";
            categoryGroup[i].classList = "active";
            // debugger;
          } else {
            categoryGroup[i].style.display = "none";
            // debugger;
          }
        }
      }, 200);
    } else {
      setSecondDD(false);
    }
  }

  function handleChange2(e) {
    const currentValue = e.target.value;
    console.log(currentValue);

    const active = document.getElementsByClassName("active")[0];

    const categoryGroup = active.getElementsByClassName("sub-category-group");

    setTimeout(function () {
      for (let i = 0; i < categoryGroup.length; i++) {
        // console.log("log");
        categoryGroup[i].style.display = "none";
        // debugger;
        if (parseInt(currentValue) === i) {
          categoryGroup[i].style.display = "block";
        } else {
          categoryGroup[i].style.display = "none";
        }
      }
    }, 200);
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
        change2={handleChange2}
        secondDD={secondDD}
        count={count}
        searchValue={searchValue}
        data={Data}
      />
      <SearchListing Data={Data} searchValue={searchValue} />
      <ServiceListing searchValue={searchValue} data={Data} />
      {/* <CountryListing countries={Data2} /> */}
    </div>
  );
}

export default App;
