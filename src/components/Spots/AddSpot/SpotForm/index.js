import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from '../../../Field';
import './style.scss';

const SpotForm = ({
  changeField,
  title,
  image,
  description,
  address,
  city,
  openingHours,
  typeSpot,
  categories,
  departement,
  sendData,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendData();
  };
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
        <Field
          name="newOpeningHours"
          placeholder="Horaires d'ouverture"
          onChange={changeField}
          value={openingHours}
        />
        <Field
          name="newTypeSpot"
          placeholder="Type de spot"
          onChange={changeField}
          value={typeSpot}
        />
        <Field
          name="newCategories"
          placeholder="Discipline"
          onChange={changeField}
          value={categories}
        />
        <Field
          name="newDepartement"
          placeholder="Departement"
          onChange={changeField}
          value={departement}
        />
        <Link to="/spots">Annuler</Link>
        <button type="submit">Valider</button>
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
  openingHours: PropTypes.string,
  typeSpot: PropTypes.string,
  categories: PropTypes.string,
  departement: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  sendData: PropTypes.func.isRequired,
};

SpotForm.defaultProps = {
  title: '',
  image: '',
  description: '',
  address: '',
  city: '',
  openingHours: '',
  typeSpot: '',
  categories: '',
  departement: '',
};

export default SpotForm;
