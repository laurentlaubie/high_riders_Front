import PropTypes from 'prop-types';

import './style.scss';

const Card = ({ fondCard }) => (
  <div className="card">
    <img src={fondCard} alt="Event 1" className="card__img" />
    <span>Nom de la ville</span>
    <span>15 Oct. 2021</span>
    <h2>Nom de l'evenement</h2>
    <h3>Disciplines pratiquées : </h3>
    <span>VTT</span>
    <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam at lacus sit amet felis...</p>
  </div>
);

Card.propTypes = {
  fondCard: PropTypes.string.isRequired,
};

export default Card;
