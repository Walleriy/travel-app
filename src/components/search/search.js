import React, { useState, useEffect} from 'react';
import cross from './cross.png'
import './search.scss'

const SearchPanel = ({ onSearchInput }) => {

    const [term, changeTerm] = useState('');

    useEffect(() => onSearchInput(term), [term])

    return (
        <form className="search_panel"
        >
            <input autoFocus type="text"
                   placeholder="type to search"
                   className='form-control search_panel__input'
                   value={term}
                   onChange={(e) => changeTerm(e.target.value)}
            />
            <img className="search_panel__img"
                 src={cross} alt="cross"
                 onClick={(e) => changeTerm('')}
            />
        </form>
    );
}

export default SearchPanel;
