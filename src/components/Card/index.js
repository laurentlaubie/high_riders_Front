import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const Card = ({
  id,
  image,
  city,
  saisonDate,
  title,
  typeCard,
  categories,
}) => (
  <Link to={`/${typeCard}/${id}`} className="card">
    <img src={image} alt={title} className="card__img" />
    <div className="card__infos">
      {city && <span className="card__infos__city">{city}</span>}
      {saisonDate && <span className="card__infos__date">{saisonDate}</span>}
    </div>
    <h2>{title}</h2>
    {categories.length > 0 ? <h3>Disciplines pratiquées : </h3> : ''}
    {categories.map((elem) => <span className="card__type">{elem.title ? elem.title : 'Non spécifié'}</span>)}
  </Link>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  saisonDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  typeCard: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
};

Card.defaultProps = {
  // description: null,
};

export default Card;
