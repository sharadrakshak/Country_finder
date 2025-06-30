import React, {useEffect, useState } from "react";
import "./Country.css";
import { Link, useLocation, useParams } from "react-router"; 
import { Usetheme } from "../contexts/Usetheme";

export default function CountryDetails() {
  // const [isdark] = useContext(ThemeContext);

  const [isdark] = Usetheme();
  // const countryName = new URLSearchParams(location.search).get("name");
  const { state } = useLocation();
  const countryName = useParams();
  let [param] = Object.values(countryName);
  function updatecountrydata(data) {
    setcountrydata({
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population.toLocaleString("en-IN"),
      region: data.region,
      capital: data.capital,
      currency: Object.values(data.currencies || {})[0]?.name,
      languages: Object.values(data.languages || {}).join(", "),
      flag: data.flags.svg,
      borders: [],
    });
    Promise.all(
      !data.borders
        ? []
        : data.borders.map((data) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${data}`)
              .then((res) => res.json())
              .then(([data]) => data.name.common);
          })
    ).then((borders) => {
      setTimeout(() => {
        setcountrydata((prev) => ({ ...prev, borders: [...borders] }));
      });
    });
  }
  const [countrydata, setcountrydata] = useState(null);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    if (state) {
      updatecountrydata(state);
      // return;
    }

    fetch(`https://restcountries.com/v3.1/name/${[param]}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updatecountrydata(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [param]);
  // let {name}=countrydata; its also works

  if (notFound) {
    return <div>Country Not Found</div>;
  } else {
    return countrydata === null ? (
      "loading..."
    ) : (
      <main className={`${isdark ? "dark" : ""}`}>
        <div className="country-details-container">
          <span
            onClick={() => {
              history.back();
            }}
            className="back-button"
          >
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>
          <div className="country-details">
            <img src={countrydata.flag} alt="" />
            <div className="details-text-container">
              <h1>{countrydata.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: </b>
                  <span className="native-name"> {countrydata.nativeName}</span>
                </p>
                <p>
                  <b>Population: </b>
                  <span className="population">{countrydata.population}</span>
                </p>
                <p>
                  <b>Region: </b>
                  <span className="region">{countrydata.region}</span>
                </p>
                <p>
                  <b>Capital: </b>
                  <span className="capital">{countrydata.capital}</span>
                </p>
                <p>
                  <b>Currencies: </b>
                  <span className="currencies">{countrydata.currency}</span>
                </p>
                <p>
                  <b>Languages: </b>
                  <span className="languages">{countrydata.languages}</span>
                </p>
              </div>
              {countrydata.borders.length !== 0 && (
                <div className="border-countries">
                  <b>Border Countries: </b>&nbsp;
                  {countrydata.borders.map((names, i) => (
                    <Link key={i} to={`/${names}`}>
                      <div>{names}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
