import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './style.scss';

const BasicMap = () => {
  const [center, setCenter] = useState({ lat: 46.50, lng: 2.00 });
  const ZOOM_LEVEL = 9;
  const ZOOM_SCROLL = true;
  const mapRef = useRef();

  return (
    <MapContainer center={center} zoom={ZOOM_LEVEL} scrollWheelZoom={ZOOM_SCROLL} ref={mapRef}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {spots.map((spot, id) => (
        <Marker 
          position={[spot.latitude, spot.longitude]}
          key={id}
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
