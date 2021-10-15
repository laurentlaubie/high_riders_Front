import PropTypes from 'prop-types';
import {
  MapContainer,
  TileLayer,
  Marker,
} from 'react-leaflet';

import './style.scss';

const MapZoomDrag = ({
  zoom,
  coordinates,
  draggable,
}) => {
  const handleClick = (evt) => {
    const { lat, lng } = evt.latlng;
    console.log(lat);
    console.log(lng);
    console.log('fghfdgh');
  };

  return (
    <MapContainer center={coordinates || [46.50, 2.00]} zoom={zoom} onClick={handleClick}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker draggable={draggable} position={coordinates} />
    </MapContainer>
  );
};

MapZoomDrag.propTypes = {
  zoom: PropTypes.number,
  coordinates: PropTypes.array,
  draggable: PropTypes.bool,
};

MapZoomDrag.defaultProps = {
  zoom: 6,
  coordinates: [46.50, 2.00],
  draggable: false,
};

export default MapZoomDrag;
