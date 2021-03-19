import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";
import './country.scss'
import MyGallery from "../../components/gallery";
import VideoPlayer from "../../components/video-player";
import CountryItem from "../../components/country-item";
import Weather from "../../components/weather";
import Map from "../../components/map";
import Date from "../../components/date";
import Currency from "../../components/currency";
import { useTranslation } from "react-i18next";

const Country = ({name, countries}) => {

    // eslint-disable-next-line
    const {t, i18n} = useTranslation('translations');

    const currentLanguage = i18n.language;

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const country = countries.find(country => country.name.toLowerCase() === name.toLowerCase());

    if (country === undefined) {
        return <div className="country__notFound">Something went wrong... Data about {name} is not available at the moment</div>
    } else {
        return (<div className="country">
                <article className="country__article">
                    <CountryItem name={country[currentLanguage].name} capital={country[currentLanguage].capital} photoUrl={country.photoUrl}/>
                    <div className="country__description">{country[currentLanguage].description}</div>
                    <MyGallery images={country.images}/>
                    <VideoPlayer url={country.videoUrl}/>
                    <Map coordinates={country.coordinates}/>
                </article>
                <aside className="country__aside">
                    <Weather city={country.capital}/>
                    <Date timezone={country.timeZone}/>
                    <Currency currency={country.currency}/>
                </aside>
            </div>
        )
    }
}

export default Country;