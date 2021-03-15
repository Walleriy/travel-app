import React from 'react';
import './CountryItem.scss';

export const CountryItem = ({ country }) => {
  return (
    <div className="country-item">
      <h3 className="country-item__title">{country.name}</h3>
      <h4 className="country-item__subtitle">{country.capital}</h4>
      <img
        className="country-item__img"
        src={country.imageUrl}
        alt={`${country.name}`}
      />
    </div>
  );
};
