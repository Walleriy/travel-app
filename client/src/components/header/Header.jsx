import React from 'react';
import { Language } from '../language/Language';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Header.scss';

export const Header = ({ lang, setLang }) => {
  const { t } = useTranslation('translations');

  console.log('head lang: ' + lang);

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo"></img>
      </Link>
      <h1 className="header__title">{t('header.h1')}</h1>
      <div className="header__select">
        <Language lang={lang} setLang={setLang} />
      </div>
    </header>
  );
};
