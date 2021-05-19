function country(props) {
    return (
      <div className="country">
        <div className="info">
          <h3>{props.name}</h3>
          <ul>
            {props.capital && <li>Capital: {props.capital}</li>}
            {props.language && <li> Language: {props.language}</li>}
            {props.currency && <li> Currency: {props.currency}</li>}
            {props.population && (
              <li> Population: {props.population.toLocaleString()}</li>
            )}
            {props.area && <li>Area: {props.area.toLocaleString()}</li>}
          </ul>
        </div>
        <div className="flag">
          <img src={props.flag} alt={props.name} height="100px" />
        </div>
      </div>
    );
  }
  export default country;
  