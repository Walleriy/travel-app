import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import { CountryItem } from '../../components/countryItem/CountryItem';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { Map } from '../../components/map/Map';
import { SightGallery } from '../../components/sightGallery/SightGallery';
import { VideoPlayer } from '../../components/videoPlayer/VideoPlayer';
import { Weather } from '../../components/weather/Weather';
import { useHttp } from '../../hooks/useHttp';

export const CountryPage = () => {
  //debugger;
  const [country, setCountry] = useState({});
  const { request, loading } = useHttp();
  const { id, lang } = useParams();
  const [language, setLanguage] = useState(lang);

  useEffect(() => {
    const getData = async () => {
      const data = await request(`/countries/${id}?lang=${language}`);
      console.log('load: ' + loading);
      setCountry(data);
    };

    getData();
  }, [language, request, id]);

  if (!id) return <Redirect to="/" />;
  return (
    <div>
      <Header lang={language} setLang={setLanguage} />
      {!loading ? (
        <div>
          <CountryItem country={country} />
          <Weather city={country.capital} />
          <Map coordinate={country.capitalLocation} />
          <SightGallery country={country} />
          <VideoPlayer url={country.videoUrl} />
        </div>
      ) : (
        'Loading'
      )}
      <Footer />
    </div>
  );
};

//<SightGallery country={country} />
