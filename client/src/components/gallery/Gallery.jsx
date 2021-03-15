import './Gallery.scss';
import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card.jsx';
import { useHttp } from '../../hooks/useHttp';
import { Link } from 'react-router-dom';

export const Gallery = () => {
  const [countries, setCountries] = useState([]);
  const { request, loading } = useHttp();

  useEffect(() => {
    const getData = async () => {
      const data = await request('/countries/');
      setCountries(data);
    };

    getData();
  }, []);

  return (
    <div className="gallery">
      {!loading
        ? countries.map((country) => (
            <div className="container" key={country.id}>
              <Link
                to={{
                  pathname: '/' + country.name,
                  countryId: country.id,
                }}
              >
                <Card country={country} />
              </Link>
            </div>
          ))
        : 'Загрузка'}
    </div>
  );
};
