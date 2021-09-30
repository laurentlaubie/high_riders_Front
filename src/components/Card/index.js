import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { MdFavorite, MdPeople, MdStar } from 'react-icons/md';
import './style.scss';
import { useSelector } from 'react-redux';

const Card = ({
  id,
  image,
  city,
  date_event,
  title,
  typeCard,
  categories,
  type_event,
  type_spot,
  e_like,
  s_like,
  numbers_users,
  average_rating,
}) => {
  const logged = useSelector((state) => state.user.logged);
  return (
    <Link to={logged ? `/${typeCard}/${id}` : '/connexion'} className="card" key={id}>
      <img src={image} alt={title} className="card__img" />
      <div className="card__infos">
        {city && <span className="card__infos__city">{city}</span>}
        {date_event && <span className="card__infos__date">{date_event}</span>}
        {type_event && <span className="card__infos__city">{type_event}</span>}
        {type_spot && <span className="card__infos__city">{type_spot}</span>}
      </div>
      <h2>{title}</h2>
      {categories.length > 0 ? <h3>Disciplines pratiquées : </h3> : ''}
      <div className="card__container__type">
        {categories.map((elem) => <span className="card__type" key={elem.id}> {elem.title ? elem.title : 'Non spécifié'} </span>)}
      </div>
      <div className="card__stats">
        {e_like && <span className="card__stats__likes"><MdFavorite />{e_like}</span>}
        {s_like && <span className="card__stats__likes"><MdFavorite />{s_like}</span>}
        {numbers_users && <span className="card__stats__likes"><MdPeople />{numbers_users}</span>}
        {average_rating && <span className="card__stats__likes"><MdStar />{average_rating}</span>}
      </div>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  city: PropTypes.string,
  date_event: PropTypes.string,
  title: PropTypes.string.isRequired,
  typeCard: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  type_event: PropTypes.string,
  type_spot: PropTypes.string,
  e_like: PropTypes.number,
  s_like: PropTypes.number,
  numbers_users: PropTypes.number,
  average_rating: PropTypes.number,
};

Card.defaultProps = {
  city: null,
  date_event: null,
  type_event: null,
  type_spot: null,
  e_like: null,
  s_like: null,
  numbers_users: null,
  average_rating: null,
};

export default Card;
