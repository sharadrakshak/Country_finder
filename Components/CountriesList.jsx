// import countriesData from "../countriesData";
import CountriesListShimmer from "./CountriesListShimmer";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";
 
export default function CountriesList({ data }) {
  const [countriesdata, setcountries] = useState([]); 

   

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,population,languages,currencies,area,timezones"
    )
      .then((response) => response.json())
      .then((data) => { 
        setcountries(data);
      });
  }, []);
  const searchTerm = data.toLowerCase();
  const array = countriesdata
    .filter(
      (e) =>
        e.name.common.toLowerCase().includes(searchTerm) ||  e.region.toLowerCase().includes(searchTerm)
    )
    .map((countrydata, index) => {
      return (
        <CountryCard
          flag={countrydata.flags.svg}
          name={countrydata.name.common}
          population={countrydata.population}
          region={countrydata.region}
          capital={countrydata.capital?.[0]}
          key={index}
          data={countrydata}
        />
      );
    });
  return (
    <>
      {countriesdata.length == 0 ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">{array}</div>
      )}
    </>
  );
}
