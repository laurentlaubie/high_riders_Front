import PropTypes from 'prop-types';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './style.scss';

const BasicMap = ({
  zoom,
  coordinates,
  data,
  typePopup,
}) => {
  const logged = useSelector((state) => state.user.logged);
  return (
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
          <Popup className="popup" openOn>
            <Link className="popup__style" to={logged ? `/${typePopup}/${item.id}` : '/connexion'}>
              <h1>{item.title}</h1>
              <img src={item.image} alt={item.title} />
            </Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

BasicMap.propTypes = {
  zoom: PropTypes.number,
  coordinates: PropTypes.array,
  data: PropTypes.array,
  typePopup: PropTypes.string.isRequired,
};

BasicMap.defaultProps = {
  zoom: 6,
  coordinates: [46.50, 2.00],
  data: [],
};

export default BasicMap;
