import React from 'react';
import './country.scss'
import MyGallery from "../../components/gallery";
import VideoPlayer from "../../components/video-player";
import {Link} from "react-router-dom";

const Country = ({id, onChoosePage, images}) => {
    return(
        <div>
            Country with id: {id}
            <Link to="/">Press to go back to main</Link>
            <div onClick={() => onChoosePage('main')}>Press to go back to main</div>
            <MyGallery images={images}/>
            <VideoPlayer url={'https://youtu.be/TBQurAxh2hA'} />
        </div>
    )
}

export default Country;