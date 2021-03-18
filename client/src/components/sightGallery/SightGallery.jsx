import React from 'react';
import ImageGallery from 'react-image-gallery';
import './SightGallery.scss';
import { useTranslation } from 'react-i18next';

export const SightGallery = ({ country }) => {
  const { t } = useTranslation('translations');
  //console.log(country.places);

  if (country.places) {
    const images = country.places.map((place) => ({
      original: place.photoUrl,
      thumbnail: place.photoUrl,
      description: place.description,
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
  } else return <></>;
};

//<SightGallery country={country} />
