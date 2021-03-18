import React from 'react';
import './CountryItem.scss';

export const CountryItem = ({ country }) => {
  console.log(country);
  return (
    <div className="country-item">
      <h1 className="country-item__title">{country.name}</h1>
      <h2 className="country-item__subtitle">{country.capital}</h2>
      <div className="description">{country.description}</div>
      <img
        className="country-item__img"
        src={country.imageUrl}
        alt={`${country.name}`}
      />
    </div>
  );
};
