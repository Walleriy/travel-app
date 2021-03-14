import React from 'react';
import './country.scss'
import MyGallery from "../../components/gallery";
import VideoPlayer from "../../components/video-player";

const Country = ({id, onChoosePage, images}) => {
    return(
        <div>
            Country with id: {id}
            <div onClick={() => onChoosePage('main')}>Press to go back to main</div>
            <MyGallery images={images}/>
            <VideoPlayer url={'https://youtu.be/TBQurAxh2hA'} />
        </div>
    )
}

export default Country;