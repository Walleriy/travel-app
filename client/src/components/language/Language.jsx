import React, { useState, useEffect } from 'react';
import './Language.scss';
import { useTranslation } from 'react-i18next';

export const Language = ({ lang, setLang }) => {
  const { t, i18n } = useTranslation('translations');

  const onLanguageChange = (event) => {
    setLang(event.target.value);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  //console.log('lang header: ' + lang);

  return (
    <div className="language">
      <h4 className="language__label">{t('header.language')}</h4>
      <select
        className="language__select"
        id="lang"
        onChange={onLanguageChange}
        value={lang}
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="ua">Українська</option>
        <option value="be">Беларуская</option>
      </select>
    </div>
  );
};
