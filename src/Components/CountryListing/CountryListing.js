import React, { useState } from "react";

function CountryListing(props) {
  const { countries } = props;

  const [countryValue, setCountryValue] = useState("");
  const [cityValue, setCityValue] = useState("");

  let dynamicListing;
  let dynamicListingValue;
  let cityInListing;
  let cityInSeach;

  if (countryValue === "") {
    dynamicListing = countries.map((country, i) => {
      cityInListing = country.cities.map((city, p) => (
        <li key={p}>{city.name}</li>
      ));
      return (
        <li key={i}>
          <>
            <strong>{country.name}</strong>
            <br />
            <ul>{cityInListing}</ul>
          </>
        </li>
      );
    });
  } else {
    dynamicListingValue = countries.filter((country, i) => {
      return country.name.toLowerCase().includes(countryValue.toLowerCase());
    });

    dynamicListing = dynamicListingValue.map((country, i) => (
      <li key={i}>{country.name}</li>
    ));
  }

  const handleSearchCountry = (e) => {
    setCountryValue(e.target.value);
  };

  const handleSearchCity = (e) => {
    setCityValue(e.target.value);
  };

  if (cityValue !== "") {
    cityInSeach = countries.map((country, i) => {
      const allCities = country.cities.filter((city, c) => {
        return city.name.toLowerCase().includes(cityValue.toLowerCase());
      });

      return allCities;
    });

    dynamicListing = cityInSeach.map((country, i) =>
      country.map((city, p) => <li key={p}>{city.name}</li>)
    );
  }

  return (
    <div>
      <h1>Countries</h1>
      <input
        onChange={handleSearchCountry}
        value={countryValue}
        type="text"
        placeholder="Country"
      />
      <input
        onChange={handleSearchCity}
        value={cityValue}
        type="text"
        placeholder="City"
      />
      <h3>{countryValue}</h3>
      <ul>{dynamicListing}</ul>
    </div>
  );
}

export default CountryListing;
