import PropTypes from 'prop-types';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MapZoom from 'src/components/MapZoom';

import Field from '../../../Field';
import Select from '../../../Select';
import './style.scss';

const SpotForm = ({
  changeField,
  changeFieldNumber,
  title,
  image,
  description,
  address,
  city,
  // openingHours,
  typeSpot,
  category,
  departement,
  sendData,
  newLatitude,
  newLongitude,
}) => {
  // const dispatch = useDispatch();
  const spotsCate = useSelector((state) => state.spots.spotsCate);
  const departs = useSelector((state) => state.spots.spotsDeparts);
  const spotTypes = [{ title: 'Bike Park' },
    { title: 'Local Spot' },
  ];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // dispatch({
    //   type: 'HOUR_CHANGE',
    //   newHour: openingHours.replace(':', 'h'),
    // });
    sendData();
  };

  // const [inputList, setInputList] = useState([]);
  // const [incr, setIncr] = useState(0);

  // const addSelectOnClick = () => {
  //   setIncr(incr + 1);
  //   console.log(incr);
  //   setInputList(inputList.concat(
  //     <Select
  //       key={incr}
  //       value={`${category}${incr}`}
  //       name={`newCategory${incr}`}
  //       data={spotsCate}
  //       placeholder="Discipline"
  //       onChange={changeField}
  //     />,
  //   ));
  // };

  return (
    <div className="login-form">
      <form autoComplete="off" className="login-form__element" onSubmit={handleSubmit}>
        <Field
          name="newTitle"
          placeholder="Titre du spot"
          onChange={changeField}
          value={title}
        />
        <Field
          name="newImage"
          placeholder="Inserer le lien de l'image"
          onChange={changeField}
          value={image}
        />
        <Field
          name="newDescription"
          placeholder="Description"
          onChange={changeField}
          value={description}
        />
        <Field
          name="newAddress"
          placeholder="Adresse"
          onChange={changeField}
          value={address}
        />
        <Field
          name="newCity"
          placeholder="Ville"
          onChange={changeField}
          value={city}
        />
        {/* <Field
          name="newOpeningHours"
          type="time"
          placeholder="Horaires d'ouverture"
          onChange={changeField}
          value={openingHours}
        /> */}
        <Select
          value={typeSpot}
          name="newTypeSpot"
          data={spotTypes}
          placeholder="Type de spot"
          onChange={changeField}
        />
        <Select
          value={category}
          name="newCategory"
          data={spotsCate}
          placeholder="Discipline"
          onChange={changeField}
        />
        {/* {inputList} */}
        {/* <button type="button" onClick={addSelectOnClick}>Ajouter un discipline</button> */}
        <Select
          value={departement}
          name="newDepartement"
          data={departs}
          placeholder="Département"
          onChange={changeField}
        />
        <span className="login-form__tag">Latitude</span>
        <Field
          name="newLatitude"
          placeholder="Latitude"
          type="number"
          step={0.00000001}
          min={-9999999999}
          max={9999999999}
          onChange={changeFieldNumber}
          value={newLatitude}
        />
        <span className="login-form__tag">Longitude</span>
        <Field
          name="newLongitude"
          placeholder="Longitude"
          type="number"
          step={0.00000001}
          min={-9999999999}
          max={9999999999}
          onChange={changeFieldNumber}
          value={newLongitude}
        />
        <div className="login-form__map">
          <MapZoom draggable />
        </div>
        <div className="login-form__validate">
          <Link to="/spots">Annuler</Link>
          <button type="submit" className="login-form__button">Valider</button>
        </div>
      </form>
    </div>
  );
};

SpotForm.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  // openingHours: PropTypes.string,
  typeSpot: PropTypes.string,
  category: PropTypes.string,
  departement: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  changeFieldNumber: PropTypes.func.isRequired,
  sendData: PropTypes.func.isRequired,
  newLatitude: PropTypes.number,
  newLongitude: PropTypes.number,
};

SpotForm.defaultProps = {
  title: '',
  image: '',
  description: '',
  address: '',
  city: '',
  // openingHours: '',
  typeSpot: '',
  category: '',
  departement: '',
  newLatitude: 0,
  newLongitude: 0,
};

export default SpotForm;
