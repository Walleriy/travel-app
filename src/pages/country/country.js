import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";
import './country.scss'
import MyGallery from "../../components/gallery";
import VideoPlayer from "../../components/video-player";
import CountryItem from "../../components/country-item";
import Weather from "../../components/weather";
import Map from "../../components/map";

const Country = ({name, countries}) => {

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
                    <CountryItem name={country.name} capital={country.capital} photoUrl={country.photoUrl}/>
                    <div className="country__description">{country.description}</div>
                    <MyGallery images={country.images}/>
                    <VideoPlayer url={'https://youtu.be/TBQurAxh2hA'}/>
                    <Map coordinates={[50.496, 41.98]}/>
                </article>
                <aside className="country__aside">
                    <Weather city={country.capital}/>
                </aside>
            </div>
        )
    }
}

export default Country;