import React from "react";

export default function Nav({ countries, toggle, activeCountry, onChange, query }) {
  return (
    <div className="nav">
      <h1>Newslify</h1>
      <div className="search-bar">
        <input placeholder="Search News" value={query} onChange={onChange} />
      </div>
      <ul className="country-selector">
        {countries.map((country) => (
          <li
            key={country.code}
            onClick={() => toggle(country)}
            className={activeCountry.code == country.code ? "active" : ""}
          >
            {country.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
}
