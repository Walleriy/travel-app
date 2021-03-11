import React, { useState, useEffect} from 'react';
import './language.scss'

const Language = ({onLanguageChange, language}) => {

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
