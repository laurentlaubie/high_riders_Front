// import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import { findSpot } from 'src/selectors/spot';

import './style.scss';
import data from 'src/data';

const Spot = () => {
  const { id } = useParams();
  const spotId = findSpot(data, Number(id));
  console.log(spotId);
  return (
    <div>
      <div>
        <h2>{spotId.title}</h2>
        <img src={spotId.image} alt={spotId.title} className="spot__img" />
      </div>
      <div className="spot__infos">
        <div>
          <span className="spot__like__number">{spotId.s_like ? spotId.s_like : '0'}</span>
          <button type="button" className="spot__like__button">J'aime</button>
        </div>
        <span className="spot__like__event">{spotId.status === 1 ? 'Spot Officiel' : 'Spot Local'}</span>
      </div>
      <p>{spotId.description}</p>
      <div className="spot__stats">
        <div>
          <span>Localisation</span>
          <span>{spotId.city}</span>
        </div>
        {spotId.saison_date ? (
          <div>
            <span>Date des saisons</span>
            <span>{spotId.saison_date}</span>
          </div>
        ) : ''}
        <div>
          <span>Type de spot</span>
          <span>{spotId.type_spot}</span>
        </div>
        <div>
          <span>Site internet</span>
          <span><a href={spotId.link}>Site Web</a></span>
        </div>
        {spotId.price ? (
          <div>
            <span>Tarifs</span>
            <span>{spotId.price} €</span>
          </div>
        ) : ''}
        {spotId.accessibility ? (
          <div>
            <span>Accès à l'évènement</span>
            <span>{spotId.accessibility}</span>
          </div>
        ) : ''}
        <div>
          <span>Horaires</span>
          <div>
            <span>lundi</span><span>{spotId.openingHours}-{spotId.closed_hours}</span>
            <span>mardi</span><span>{spotId.openingHours}-{spotId.closed_hours}</span>
            <span>marcredi</span><span>{spotId.openingHours}-{spotId.closed_hours}</span>
            <span>jeudi</span><span>{spotId.openingHours}-{spotId.closed_hours}</span>
            <span>vendredi</span><span>{spotId.openingHours}-{spotId.closed_hours}</span>
            <span>samedi</span><span>{spotId.openingHours}-{spotId.closed_hours}</span>
            <span>dimanche</span><span>{spotId.openingHours}-{spotId.closed_hours}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Spot.propTypes = {

// };

export default Spot;
