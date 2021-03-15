import React from 'react';
import './main.scss'
import SearchPanel from "../../components/search/search";
import {Link} from "react-router-dom";
import CountryItem from "../../components/country-item";

const Main = ({SearchCountry, Countries}) => {

    const renderCountries = ( countries ) => {

        return countries.map(({ name, capital, photoUrl }) => {
            return <CountryItem name={name} capital={capital} photoUrl={photoUrl }/>
        })
    }

    const CountryList = () => {
        const items = renderCountries(Countries);
        return <div className="main__country-list">{items}</div>
    }

    return (
        <div>
            <SearchPanel onSearchInput={SearchCountry}/>
            <CountryList />
            Countries
            <Link to="/country/1">1</Link>
            <Link to="/country/2">2</Link>
            <Link to="/country/3">3</Link>
        </div>
    )
};

export default Main;
