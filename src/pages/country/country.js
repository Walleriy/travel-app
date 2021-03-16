import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";
import './country.scss'
import MyGallery from "../../components/gallery";
import VideoPlayer from "../../components/video-player";
import CountryItem from "../../components/country-item";

const Country = ({name, countries}) => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const country = countries.find(country => country.name.toLowerCase() === name.toLowerCase());

    return(
        <div className="country">
            <article className="country__article">
                <CountryItem name={country.name} capital={country.capital} photoUrl={country.photoUrl} />
                <div className="country__description">{country.description}</div>
                <MyGallery images={country.images}/>
                <VideoPlayer url={'https://youtu.be/TBQurAxh2hA'} />
            </article>
            <aside className="country__aside">

            </aside>
        </div>
    )
}

export default Country;