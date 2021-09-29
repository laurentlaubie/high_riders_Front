import PropTypes from 'prop-types';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import spots from 'src/data';
import './style.scss';

const BasicMap = ({
  zoom,
  coordinates,
  popupTitle,
}) => (
  <MapContainer center={coordinates} zoom={zoom}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {spots.map((spot) => (
      <Marker
        position={[spot.latitude, spot.longitude]}
        key={spot.id}
      >
        <Popup openOn>
          {spot.title}
        </Popup>
      </Marker>
    ))}
    <Marker position={coordinates}>
      <Popup>
        {popupTitle}
      </Popup>
    </Marker>
  </MapContainer>
);

BasicMap.propTypes = {
  zoom: PropTypes.number,
  coordinates: PropTypes.array,
  popupTitle: PropTypes.string,
};

BasicMap.defaultProps = {
  zoom: 6,
  coordinates: [46.50, 2.00],
  popupTitle: '',
};

export default BasicMap;
