import React from 'react';
import './country-item.scss'

const CountryItem = ({ name, capital, photoUrl }) => {

    return (
        <div className="country-item">
            <h3 className="country-item__title">{ name }</h3>
            <h4 className="country-item__subtitle">{ capital }</h4>
            <img className="country-item__img" src={photoUrl} alt={`${name}`} />
        </div>
    );
}

export default CountryItem;