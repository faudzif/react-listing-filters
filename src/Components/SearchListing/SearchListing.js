import React, { useState, useEffect } from "react";

function SearchListing(props) {
  const { Data, searchValue } = props;

  const [listing, setListing] = useState([]);

  const [items, setItems] = useState([]);

  useEffect(() => {}, []);

  function handleClick() {
    console.log("click");
  }

  const SearchData = () => {
    // console.log(Data[0].subCategories[0].services);

    if (searchValue !== "") {
      //   console.log("not empty");

      let totalResult1;
      let totalResult2;
      let totalResult3;

      const completeSearch = Data.map((category) => {
        totalResult1 = category.subCategories.map((subCategory) => {
          totalResult2 = subCategory.services.filter((service) => {
            totalResult3 = service.name
              .toLowerCase()
              .includes(searchValue.toLowerCase());
            // console.log(totalResult3);
            return totalResult3;
          });
          // console.log(totalResult);
          return totalResult2;
        });
        // console.log(totalResult2);
        return totalResult1;
      });

      // console.log(totalResult1);
      // console.log(totalResult2);
      // console.log(totalResult3);

      // console.log(completeSearch);

      //   setListing(completeSearch);

      /* const result = Data[0].subCategories[0].services.filter((value) => {
        const filteredData = value.name
          .toLowerCase()
          .includes(searchValue.toLowerCase());
        // console.log(searchValue);
        return filteredData;
      });

      const list = completeSearch.map((value, index) => {
        // console.log(value);
        value.map((list, i) => {
          // console.log(list);
          // setListing([{ ...list }]);
          return list;
        });

        return value;
      });

      return (
        <ul className="search-listing">
          {listing}

          {completeSearch.map((value, p) => (
            <li className="farhan" key={p}>
              {value.name}
            </li>
          ))}
        </ul>
      ); */

      return <h4 onClick={handleClick}>found data</h4>;
    } else {
      //   console.log("empty");
      return <h4>no data</h4>;
    }
  };

  <button>test</button>;

  return <SearchData />;
}

export default SearchListing;
