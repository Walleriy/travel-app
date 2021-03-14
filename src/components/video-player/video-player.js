import React from 'react'
import './video-player.scss'
import {useTranslation} from "react-i18next";
import ReactPlayer from 'react-player'

const VideoPlayer = ({ url }) => {

    const {t} = useTranslation('translations');

    return (
        <div>
            <h3 className="video-player__title">
                {t('video-player.title')}
            </h3>
            <ReactPlayer url={url} controls={true} width="100%" height="1000px"/>
        </div>
    )
}

export default VideoPlayer;
