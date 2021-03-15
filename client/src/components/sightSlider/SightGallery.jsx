import React from 'react';
import ImageGallery from 'react-image-gallery';
import './SightGallery.scss';
import { useTranslation } from 'react-i18next';

export const SightGallery = ({ country }) => {
  const { t } = useTranslation('translations');

  const images = country.places.map((place) => ({
    original: place.photoUrl,
  }));

  return (
    <div>
      <h3 className="my-gallery__title">{t('gallery.title')}</h3>
      <ImageGallery
        items={images}
        lazyLoad={true}
        showBullets={true}
        showIndex={true}
      />
    </div>
  );
};
