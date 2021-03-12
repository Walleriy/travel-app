import React, { useState, useEffect} from 'react';
import './language.scss'
import { useTranslation } from 'react-i18next';

const Language = () => {

    const {t, i18n} = useTranslation('translations');

    const [language, setLanguage] = useState('en');

    const onLanguageChange = (event) => {
        setLanguage(event.target.value);
    }

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [ language ]);

    return (
        <select
            className='language'
            id='lang'
            onChange={onLanguageChange}
            value={language}
        >
            <option value='en'>English</option>
            <option value='ru'>Русский</option>
            <option value='ua'>Українська</option>
            <option value='be'>Беларуская</option>
        </select>
    );
}

export default Language;
