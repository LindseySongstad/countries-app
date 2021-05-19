import React, { useState, useEffect } from "react";
import countries from "./CountriesAPI";
import Country from "./Country";
function CountriesComponent() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    countries.getCountries().then((response) => {
      setData(response.data);
    });
  }, []);

  const filteredData =
    searchName.length === 0
      ? data
      : data.filter((country) =>
          country.name.toLowerCase().includes(searchName.toLowerCase())
        );

  return (
    <div className="App">
      <div className="search-container">
        <h1>Country Facts</h1>
        <span className="search">Search </span>
        <input
          className="input"
          type="text"
          placeholder="Country Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>

      <div className="flex-container">
        {filteredData.map((item, index) => {
          return (
            <Country
              key={index}
              name={item.name}
              capital={item.capital}
              population={item.population}
              flag={item.flag}
              language={item.languages[0].name}
              currency={item.currencies[0].name}
              area={item.area}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CountriesComponent;
