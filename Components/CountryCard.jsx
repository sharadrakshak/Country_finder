 
import { Link } from "react-router";

export default function CountryCard({
  flag,
  name,
  population,
  region,
  capital,
  data,
}) {
  return (
    <Link
      className="country-card"
      to={/*`/country?name=${name}`*/ name}
      state={data}
    >
      <div className="adust">
        <img src={flag} alt="flag" />
      </div>
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b> {population.toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
}
