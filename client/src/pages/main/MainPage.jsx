import './MainPage.scss';
import React from 'react';
import { Gallery } from '../../components/gallery/Gallery';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { Search } from '../../components/search/Search';

export const MainPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Gallery />
      <Footer />
    </div>
  );
};
