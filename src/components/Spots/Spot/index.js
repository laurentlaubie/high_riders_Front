// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { findSpot } from 'src/selectors/spot';

// import BasicMap from 'src/components/BasicMap';

import './style.scss';
import data from 'src/data';

const Spot = () => {
  const { id } = useParams();
  const spotId = findSpot(data, Number(id));
  // console.log(spotId);
  return (
    <div className="spot">
      <div className="spot__title__container">
        <h2 className="spot__title__container__title">{spotId.title}</h2>
        <img src={spotId.image} alt={spotId.title} className="spot__title__container__img" />
      </div>
      <div className="spot__infos">
        <div className="spot__infos__meta">
          <div className="spot__infos__meta__container">
            <span className="spot__infos__meta__container__number">{spotId.s_like ? spotId.s_like : '0'}</span>
            <button type="button" className="spot__infos__meta__container__button">J'aime</button>
          </div>
          <span className="spot__infos__meta__event">{spotId.status === 1 ? 'Spot Officiel' : 'Spot Local'}</span>
        </div>
        <p className="spot__infos__description">{spotId.description}</p>
      </div>
      <div className="spot__stats">
        <div className="spot__stats__container">
          <span className="spot__stats__tag">Localisation</span>
          <span className="spot__stats__name">{spotId.city}</span>
        </div>
        {spotId.saison_date ? (
          <div className="spot__stats__container">
            <span className="spot__stats__tag">Date des saisons</span>
            <span className="spot__stats__name">{spotId.saison_date}</span>
          </div>
        ) : ''}
        <div className="spot__stats__container">
          <span className="spot__stats__tag">Type de spot</span>
          <span className="spot__stats__name">{spotId.type_spot}</span>
        </div>
        <div className="spot__stats__container">
          <span className="spot__stats__tag">Site internet</span>
          <a className="spot__stats__name spot__stats__name--link" href={spotId.link}>Site Web</a>
        </div>
        <div className="spot__stats__container">
          <span className="spot__stats__tag">Tarif</span>
          <span className="spot__stats__name">{spotId.price ? `${spotId.price} €` : '0 €'}</span>
        </div>
        {spotId.accessibility ? (
          <div className="spot__stats__container">
            <span className="spot__stats__tag">Accès à l'évènement</span>
            <span className="spot__stats__name">{spotId.accessibility}</span>
          </div>
        ) : ''}
        <div className="spot__stats__container">
          <span className="spot__stats__tag">Horaires</span>
          <span className="spot__stats__name">{spotId.openingHours}-{spotId.closedHours}</span>
        </div>
      </div>
    </div>
  );
};

// Spot.propTypes = {

// };

export default Spot;
