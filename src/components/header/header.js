import React from 'react';
import './header.scss'
import Language from "../language";
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";
import logo from './logo.png'

const Header = () => {

    const {t} = useTranslation('translations');

    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="logo" className="header__logo"></img>
            </Link>
            <h1 className="header__title">{t('header.h1')}</h1>
            <Language />
        </header>
    );
}

export default Header;
