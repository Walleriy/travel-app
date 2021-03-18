import React, { useState, useEffect } from 'react';
import cross from './cross.png';
import './Search.scss';

export const Search = ({ onSearchInput }) => {
  const [term, changeTerm] = useState('');

  useEffect(() => onSearchInput(term), [onSearchInput, term]);

  const onSubmit = (e) => {
    e.preventDefault();
    changeTerm(e.target.value);
  };

  return (
    <div className="search_panel">
      <form id="search_panel" className="search_panel__form">
        <input
          autoFocus
          type="text"
          placeholder="type to search"
          className="form-control search_panel__input"
          value={term}
          onChange={(e) => changeTerm(e.target.value)}
        />
        <img
          className="search_panel__img"
          src={cross}
          alt="cross"
          onClick={(e) => changeTerm('')}
        />
      </form>
      <button
        class="btn waves-effect waves-light yellow lighten-3"
        type="submit"
        form="search_panel"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Search
      </button>
    </div>
  );
};

/* <button
        type="submit"
        form="search_panel"
        className="search_panel__submit"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Search
      </button> */
