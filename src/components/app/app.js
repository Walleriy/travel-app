import React, { useState, useEffect} from 'react';
import Header from "../header";
import Footer from "../footer";
import './app.scss'
import { useTranslation } from 'react-i18next';
import i18n from "i18next";


const App = () => {

    const {t, i18} = useTranslation('translations');

    const [page, setPage] = useState('main');

    const [language, setLanguage] = useState('en');

    const onLanguageChange = (event) => {
        setLanguage(event.target.value);
    }

    /*useEffect(() => {
    }, [ ]);*/

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [ language ]);

    const Country = () => <div>Country</div>;

    const Main = () => <div>Main</div>;

    let domPage;
    if (page === 'country') {
        domPage = <Country />
    } else {
        domPage = <Main />
    }

    return (
        <React.Fragment>
            <Header onLanguageChange={onLanguageChange} language={language}/>
            {domPage}
            <Footer />
        </React.Fragment>
    );
}

export default App;
