import PropTypes from 'prop-types';

import './style.scss';

const Card = ({
  id,
  image,
  city,
  saisonDate,
  title,
  typeSpot,
  description,
}) => (
  <div className="card">
    <img src={image} alt={`Event ${id}`} className="card__img" />
    <div className="card__infos">
      <span className="card__infos__city">{city}</span>
      <span className="card__infos__date">{saisonDate}</span>
    </div>
    <h2>{title}</h2>
    <h3>Disciplines pratiquées : <span className="card__type">{typeSpot}</span></h3>
    <p>{description}</p>
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  saisonDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  typeSpot: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Card.defaultProps = {
  description: null,
};

export default Card;
