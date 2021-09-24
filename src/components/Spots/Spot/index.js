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
      {/* <img src={image} alt={`Event ${id}`} className="card__img" />
      <div className="card__infos">
        {city && <span className="card__infos__city">{city}</span>}
        <span className="card__infos__date">{saisonDate}</span>
      </div>
      <h2>{title}</h2>
      <h3>Disciplines pratiquées : </h3>
      {typeSpot ? <span className="card__type">{typeSpot}</span> : <span className="card__type">Non spécifié</span>}
      <p>{description}</p> */}
    </div>
  );
};

// Spot.propTypes = {

// };

export default Spot;
