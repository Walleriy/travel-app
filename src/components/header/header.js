import React from 'react';
import './header.scss'
import Language from "../language";
import { useTranslation } from "react-i18next";

const Header = () => {

    const {t} = useTranslation('ns');

    return (
        <header className="header">
            <h1 className="header__title">{t('header.h1')}</h1>
            <Language />
        </header>
    );
}

export default Header;
