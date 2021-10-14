import PropTypes from 'prop-types';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

import './style.scss';

const MapZoom = ({
  zoom,
  coordinates,
  popupTitle,
  data,
  draggable,
}) => (
  <MapContainer center={coordinates || [46.50, 2.00]} zoom={zoom}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {data.map((item) => (
      <Marker
        position={[item.latitude || 0, item.longitude || 0]}
        key={item.id}
      >
        <Popup openOn>
          {item.title}
        </Popup>
      </Marker>
    ))}
    <Marker draggable={draggable} position={coordinates}>
      <Popup>{popupTitle}</Popup>
    </Marker>
  </MapContainer>
);

MapZoom.propTypes = {
  zoom: PropTypes.number,
  coordinates: PropTypes.array,
  popupTitle: PropTypes.string,
  data: PropTypes.array,
  draggable: PropTypes.bool,
};

MapZoom.defaultProps = {
  zoom: 6,
  coordinates: [46.50, 2.00],
  popupTitle: '',
  data: [],
  draggable: false,
};

export default MapZoom;
