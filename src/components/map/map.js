import React from "react";
import './map.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import fullScreenBtn from './fullScreenBtn.png'

const Map = ({ coordinates }) => {

    const handle = useFullScreenHandle();

    return (
        <div className="map">

            <button onClick={handle.enter} className="map__FullScreenBtn">
                <img className="map__fullScreenImg" src={fullScreenBtn} alt="fullScreen Btn"></img>
            </button>

            <FullScreen handle={handle}>

                <MapContainer className="map__container" center={coordinates} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={coordinates}>
                        <Popup>
                            A pretty CSS3 popup. <br/> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>

            </FullScreen>
        </div>
    );
}

export default Map;
