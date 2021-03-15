import './Card.scss';
import React from 'react';

export const Card = ({ country }) => {
  return (
    <div className="card">
      <div className="title"> {country.name} </div>
      <img src={country.imageUrl} alt="img" />
    </div>
  );
};
