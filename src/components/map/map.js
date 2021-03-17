import React from "react";
import './map.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"


const Map = ({ coordinates }) => {

    return (
        <MapContainer className="map" center={coordinates} zoom={13} scrollWheelZoom={false}>
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
    );
}

export default Map;
