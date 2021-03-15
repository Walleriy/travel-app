import React from 'react';
import './country.scss'
import MyGallery from "../../components/gallery";
import VideoPlayer from "../../components/video-player";
import CountryItem from "../../components/country-item";

const Country = ({name, countries}) => {

    const country = countries.find(country => country.name.toLowerCase() === name.toLowerCase());

    return(
        <div>
            <CountryItem name={country.name} capital={country.capital} photoUrl={country.photoUrl} />
            <div className="country__description">{country.description}</div>
            <MyGallery images={country.images}/>
            <VideoPlayer url={'https://youtu.be/TBQurAxh2hA'} />
        </div>
    )
}

export default Country;