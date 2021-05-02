import React, { useState, useEffect } from "react";

function SearchListing(props) {
  const { Data, searchValue } = props;

  const [listing, setListing] = useState([]);

  const SearchData = () => {
    // console.log(Data[0].subCategories[0].services);

    if (searchValue !== "") {
      //   console.log("not empty");

      const completeSearch = Data.map((category) => {
        // console.log(category);
        const subCat = category.subCategories.map((sub) => {
          const subMap = sub.services.map((service) => {
            // console.log(service);
            return service;
          });

          //   console.log(sub);
          const subCatSer = sub.services.filter((service) => {
            // console.log(service);
            const filteredData1 = service.name
              .toLowerCase()
              .includes(searchValue.toLowerCase())
              .this.setListing({
                filteredLising: subCatSer,
              });

            return filteredData1;
          });

          console.log(subCatSer);

          //   setListing(subCatSer);

          return subCatSer;

          //   return subMap;
        });

        return subCat;
      });

      console.log(completeSearch);
      //   setListing(completeSearch);

      const result = Data[0].subCategories[0].services.filter((value) => {
        const filteredData = value.name
          .toLowerCase()
          .includes(searchValue.toLowerCase());
        // console.log(searchValue);
        return filteredData;
      });

      return (
        <ul className="search-listing">
          {completeSearch.map((value, p) => (
            <li key={p}>{value.name}</li>
          ))}
        </ul>
      );
    } else {
      //   console.log("empty");
      return <h4>no data</h4>;
    }
  };

  return <SearchData />;
}

export default SearchListing;
