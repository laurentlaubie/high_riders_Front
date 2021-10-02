// import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import SpotForm from './SpotForm';
import './style.scss';

const AddSpot = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.spots.newTitle);
  const image = useSelector((state) => state.spots.newImage);
  const description = useSelector((state) => state.spots.newDescription);
  const address = useSelector((state) => state.spots.newAddress);
  const city = useSelector((state) => state.spots.newCity);
  const openingHours = useSelector((state) => state.spots.newOpeningHours);
  const typeSpot = useSelector((state) => state.spots.newTypeSpot);
  const categories = useSelector((state) => state.spots.newCategories);
  const departement = useSelector((state) => state.spots.newDepartement);

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_SPOT_VALUE',
      value: value,
      key: key,
    });
  };

  const sendData = () => {
    dispatch({
      type: 'SEND_NEW_SPOT',
    });
  };

  return (
    <div className="connection">
      <div className="connection-form">
        <h1>Ajouter un spot</h1>
        <SpotForm
          title={title}
          image={image}
          address={address}
          description={description}
          city={city}
          openingHours={openingHours}
          typeSpot={typeSpot}
          categories={categories}
          departement={departement}
          changeField={changeField}
          sendData={sendData}
        />
      </div>
    </div>
  );
};

// AddSpot.propTypes = {

// };

export default AddSpot;
