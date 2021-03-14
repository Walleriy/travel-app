import React from 'react'
import ImageGallery from 'react-image-gallery';
import './gallery.scss'
import {useTranslation} from "react-i18next";

const MyGallery = ({ images }) => {

    const {t} = useTranslation('translations');

    return (
        <div>
            <h3 className="my-gallery__title">
                {t('gallery.title')}
            </h3>
            <ImageGallery
                items={images}
                lazyLoad={true}
                showBullets={true}
                showIndex={true}
            />
        </div>
    )
}

export default MyGallery;
