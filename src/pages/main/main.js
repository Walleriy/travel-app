import React, {useState} from 'react';
import './main.scss'
import SearchPanel from "../../components/search/search";
import {Link} from "react-router-dom";
import CountryItem from "../../components/country-item";
import { useTranslation } from "react-i18next";

const Main = ({ Countries }) => {

    const {t} = useTranslation('translations');
    const [term, setTerm] = useState('');

    const SearchCountry = (term) => {
        setTerm(term);
    }

    const updateVisibleCountries = () => {

        let countries;
        if (term.length === 0) {
            countries = Countries;
        } else {
            countries = Countries.filter(({name}) => {
                return name.toLowerCase()
                    .indexOf(term.toLowerCase()) > -1;
            })
        }

        return renderCountries(countries);
    }

    const renderCountries = (countries) => {

        if (countries.length === 0) {
            return <div>{t('main.notFound')}</div>
        } else {
            return countries.map(({name, capital, photoUrl}) => {
                return (
                    <Link to={`/country/${name}`}>
                        <CountryItem name={name} capital={capital} photoUrl={photoUrl}/>
                    </Link>
                )
            });
        }
    }

    const visibleCountries = updateVisibleCountries();

    return (
        <div className="main">
            <SearchPanel onSearchInput={SearchCountry}/>
            <div className="main__country-list">{visibleCountries}</div>
        </div>
    )
};

export default Main;
