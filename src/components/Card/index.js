import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Card = ({
  id,
  image,
  city,
  saisonDate,
  title,
  typeSpot,
  description,
  typeCard,
}) => (
  <Link to={`/${typeCard}/${id}`} className="card">
    <img src={image} alt={title} className="card__img" />
    <div className="card__infos">
      {city && <span className="card__infos__city">{city}</span>}
      <span className="card__infos__date">{saisonDate}</span>
    </div>
    <h2>{title}</h2>
    <h3>Disciplines pratiquées : </h3>
    {typeSpot ? <span className="card__type">{typeSpot}</span> : <span className="card__type">Non spécifié</span>}
    <p>{description}</p>
  </Link>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  saisonDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  typeSpot: PropTypes.string.isRequired,
  description: PropTypes.string,
  typeCard: PropTypes.string.isRequired,
};

Card.defaultProps = {
  description: null,
};

export default Card;
