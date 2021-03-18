import './MainPage.scss';
import React, { useState } from 'react';
import { Gallery } from '../../components/gallery/Gallery';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { Search } from '../../components/search/Search';

export const MainPage = ({ lang, setLang }) => {
  const [term, setTerm] = useState('');

  const SearchCountry = (term) => {
    setTerm(term);
  };

  return (
    <div>
      <Header lang={lang} setLang={setLang} />
      <Search onSearchInput={SearchCountry} />
      <Gallery lang={lang} term={term} />
      <Footer />
    </div>
  );
};
