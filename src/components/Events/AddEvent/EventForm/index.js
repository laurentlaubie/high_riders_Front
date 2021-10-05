import PropTypes from 'prop-types';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Field from '../../../Field';
import Select from '../../../Select';
import './style.scss';

const EventForm = ({
  changeField,
  title,
  image,
  description,
  closingHour,
  difficulty,
  dateEvent,
  openingHour,
  link,
  price,
  accessibility,
  typeEvent,
  category,
  departement,
  sendData,
}) => {
  // const dispatch = useDispatch();
  const eventsCate = useSelector((state) => state.events.eventsCate);
  const departs = useSelector((state) => state.events.eventsDepar);
  const eventTypes = [{ title: 'Loisir' },
    { title: 'Professionel' },
  ];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendData();
  };

  return (
    <div className="login-form">
      <form autoComplete="off" className="login-form__element" onSubmit={handleSubmit}>
        <Field
          name="newTitle"
          placeholder="Titre de l'évènement"
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
          name="newOpeningHour"
          // type="time"
          placeholder="Horaires d'ouverture"
          onChange={changeField}
          value={openingHour}
        />
        <Field
          name="newClosingHour"
          placeholder="Horaires de fermeture"
          onChange={changeField}
          value={closingHour}
        />
        <Field
          name="newDifficulty"
          type="number"
          placeholder="Difficulté"
          onChange={changeField}
          value={difficulty}
        />
        <Field
          name="newDateEvent"
          type="date"
          placeholder="Date de l'évènement"
          onChange={changeField}
          value={dateEvent}
        />
        <Field
          name="newLink"
          placeholder="Lien du site web"
          onChange={changeField}
          value={link}
        />
        <Field
          name="newPrice"
          type="number"
          placeholder="Prix de l'évènement"
          onChange={changeField}
          value={price}
        />
        <Field
          name="newAccessibility"
          placeholder="Accessibilité"
          onChange={changeField}
          value={accessibility}
        />
        <Select
          name="newTypeEvent"
          placeholder="Type d'évènement"
          onChange={changeField}
          value={typeEvent}
          data={eventTypes}
        />
        <Select
          name="newCategory"
          placeholder="Discipline"
          onChange={changeField}
          value={category}
          data={eventsCate}
        />
        <Select
          name="newDepartement"
          placeholder="Département"
          onChange={changeField}
          value={departement}
          data={departs}
        />
        <div className="login-form__validate">
          <Link to="/evenements">Annuler</Link>
          <button type="submit" className="login-form__button">Valider</button>
        </div>
      </form>
    </div>
  );
};

EventForm.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  openingHour: PropTypes.string,
  typeEvent: PropTypes.string,
  category: PropTypes.string,
  departement: PropTypes.string,
  closingHour: PropTypes.string,
  difficulty: PropTypes.string,
  dateEvent: PropTypes.string,
  link: PropTypes.string,
  price: PropTypes.string,
  accessibility: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  sendData: PropTypes.func.isRequired,
};

EventForm.defaultProps = {
  title: '',
  image: '',
  description: '',
  openingHour: '',
  typeEvent: '',
  category: '',
  departement: '',
  closingHour: '',
  difficulty: '',
  dateEvent: '',
  link: '',
  price: '',
  accessibility: '',
};

export default EventForm;
