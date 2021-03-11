import React from 'react';
import './header.scss'
import Language from "../language";
import i18n from "i18next";
import {translate, Trans, useTranslation} from "react-i18next";

const Header = ({onLanguageChange, language}) => {

    const {t, i18} = useTranslation('translations');

    return (
        <header className="header">
            <h1 className="header__title">{t('h1')}</h1>
            <Language onLanguageChange={onLanguageChange} language={language}/>
        </header>
    );
}

export default Header;
