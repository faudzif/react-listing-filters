import React, { useState } from "react";

import Dropdown from "./../../Tags/Dropdown";
import Input from "./../../Tags/Input";

function Filters(props) {
  const [secondDD, setSecondDD] = useState(false);
  const [count, setCount] = useState(-1);
  const [searchValue, setSearchValue] = useState("");

  function handleChange(e) {
    if (e.target.value !== "") {
      setCount(e.target.value);
      setSecondDD(true);
    } else {
      setSecondDD(false);
    }
  }

  function handleSearch(e) {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }

  return (
    <>
      <Dropdown event={handleChange}>
        <option value="">Select Category</option>
        {props.data.map((name, i) => {
          return (
            <option value={i} key={i}>
              {name.cateogryName}
            </option>
          );
        })}
      </Dropdown>

      {secondDD && (
        <Dropdown>
          {props.data[count].subCategories.map((name, i) => {
            return <option key={i}>{name.cateogryName}</option>;
          })}
        </Dropdown>
      )}

      <Input value={searchValue} event={handleSearch} />

      {/* 
      <Dropdown>
        {props.data.map((name, i) => {
          return <option key={i}>{name.cateogryName}</option>;
        })}
      </Dropdown> */}
    </>
    // <select>
    //   {Data.map((name, i) => {
    //     return <option key={i}>{name.cateogryName}</option>;
    //   })}
    // </select>
  );
}

export default Filters;
