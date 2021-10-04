import PropTypes from 'prop-types';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

import './style.scss';

const BasicMap = ({
  zoom,
  coordinates,
  popupTitle,
  data,
}) => (
  <MapContainer center={coordinates} zoom={zoom}>
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
    <Marker position={coordinates}>
      <Popup>{popupTitle}</Popup>
    </Marker>
  </MapContainer>
);

BasicMap.propTypes = {
  zoom: PropTypes.number,
  coordinates: PropTypes.array,
  popupTitle: PropTypes.string,
  data: PropTypes.array.isRequired,
};

BasicMap.defaultProps = {
  zoom: 6,
  coordinates: [46.50, 2.00],
  popupTitle: '',
};

export default BasicMap;
