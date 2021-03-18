import React from 'react';
import './Map.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Map = ({ coordinate }) => {
  let coord = [];
  if (coordinate && coordinate.coordinates) {
    coord[0] = coordinate.coordinates[1];
    coord[1] = coordinate.coordinates[0];
    console.log(coord);
    return (
      <MapContainer
        className="map"
        center={coord}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coord}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
  return <></>;
};
