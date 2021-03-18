import './Gallery.scss';
import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card.jsx';
import { useHttp } from '../../hooks/useHttp';
import { Link } from 'react-router-dom';

export const Gallery = ({ lang, term }) => {
  const [countries, setCountries] = useState([]);
  const { request, loading } = useHttp();

  console.log('lang gallery: ' + lang);

  useEffect(() => {
    const getData = async () => {
      const data = await request(`/countries/?lang=${lang}`);
      setCountries(data);
      console.log('load gallery');
    };

    getData();
  }, [lang, request]);

  console.log('term: ' + term);

  const updateVisibleCountries = () => {
    let filteredCountries;
    if (term.length === 0) {
      filteredCountries = countries;
    } else {
      filteredCountries = countries.filter(({ name }) => {
        return name.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
    }
    return filteredCountries;
  };

  return (
    <div className="gallery">
      {!loading
        ? updateVisibleCountries().map((country) => (
            <div className="container" key={country.id}>
              <Link to={`/${country.name}/${country.id}/${lang}`}>
                <Card country={country} />
              </Link>
            </div>
          ))
        : 'Загрузка'}
    </div>
  );
};
