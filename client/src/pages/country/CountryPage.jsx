import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { useHttp } from '../../hooks/useHttp';

export const CountryPage = (props) => {
  const [country, setCountry] = useState({});
  const { request, loading } = useHttp();

  useEffect(() => {
    const getData = async () => {
      if (props.location.countryId) {
        const data = await request(`/countries/${props.location.countryId}`);
        setCountry(data);
      }
    };

    getData();
  }, []);

  console.log(country);

  if (!props.location.countryId) return <Redirect to="/" />;

  return <div>Country Page</div>;
};
