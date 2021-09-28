// import React from 'react';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import spots from 'src/data';
import './style.scss';

const BasicMap = () => {
  const [center, setCenter] = useState({ lat: 46.50, lng: 2.00 });
  const zoom = 9;

  return (
    <MapContainer center={center} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {spots.map((spot) => (
        <Marker
          position={[spot.latitude, spot.longitude]}
          key={spot.id}
        >
          <Popup>
            { spot.title }
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
export default BasicMap;
