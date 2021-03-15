import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { CountryItem } from '../../components/countryItem/CountryItem';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { SightGallery } from '../../components/sightSlider/SightGallery';
import { VideoPlayer } from '../../components/videoPlayer/VideoPlayer';
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

  console.log(country.places);

  if (!props.location.countryId) return <Redirect to="/" />;

  return (
    <div>
      {!loading ? (
        <div>
          <Header />
          <CountryItem country={country} />
          <VideoPlayer url={country.videoUrl} />
          <SightGallery country={country} />
          <Footer />
        </div>
      ) : (
        'Loading'
      )}
    </div>
  );
};
