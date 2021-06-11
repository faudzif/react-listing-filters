import React, { useState } from "react";
import Dropdown from "./../../Tags/Dropdown";
import Input from "./../../Tags/Input";

import ServiceListing from "./../ServiceListing/ServiceListing";

function Filters(props) {
  /* Props */
  const { data } = props;

  /* Hooks */
  const [countDataMain, setCountDataMain] = useState(-1);
  const [secondDD, setSecondDD] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function handleChangeMainCategory(e) {
    const categoryGroup = document.getElementsByClassName("category-group");

    const currentValue = e.target.value;
    setCountDataMain(currentValue);
    if (currentValue !== "") {
      setSecondDD(true);
      setTimeout(function () {
        for (let i = 0; i < categoryGroup.length; i++) {
          // debugger;
          if (parseInt(currentValue) === i) {
            categoryGroup[i].style.display = "block";
            categoryGroup[i].className += " active";
            // debugger;
          } else {
            categoryGroup[i].style.display = "none";
            categoryGroup[i].classList.remove("active");
          }
        }
      }, 200);
    } else {
      setSecondDD(false);
    }
  }

  function handleChangeSubCategory(e) {
    const subCurrentValue = e.target.value;
    // console.log(subCurrentValue);
    const active = document.getElementsByClassName("active")[0];

    if (typeof active !== "undefined") {
      const subCategoryGroup =
        active.getElementsByClassName("sub-category-group");

      setTimeout(function () {
        for (let i = 0; i < subCategoryGroup.length; i++) {
          if (parseInt(subCurrentValue) === i) {
            subCategoryGroup[i].style.display = "block";
            subCategoryGroup[i].className += " active";
            // debugger;
          } else {
            subCategoryGroup[i].style.display = "none";
            subCategoryGroup[i].classList.remove("active");
          }
        }
      }, 200);
    }
  }

  function handleSearchKeyword(e) {
    // console.log(e.target.value);
    setSearchValue(e.target.value);
  }

  return (
    <>
      <Dropdown event={handleChangeMainCategory}>
        <option value="">Select Category</option>
        {data.map((name, i) => {
          return (
            <option value={i} key={i}>
              {name.cateogryName}
            </option>
          );
        })}
      </Dropdown>

      {secondDD && (
        <Dropdown event={handleChangeSubCategory}>
          <option value="">Select Sub Category</option>
          {data[countDataMain].subCategories.map((name, i) => {
            return (
              <option value={i} key={i}>
                {name.cateogryName}
              </option>
            );
          })}
        </Dropdown>
      )}
      <Input value={searchValue} event={handleSearchKeyword} />
      <ServiceListing searchValue={searchValue} data={data} />
    </>
  );
}

export default Filters;
