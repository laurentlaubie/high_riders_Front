import { NavLink } from 'react-router-dom';
import highridersLogo from './highridersLogo.png';
import userIcon from './userIcon.svg';
import './style.scss';

const Header = () => (
  <div className="header">
    <img className="header__logo" src={highridersLogo} alt="logo" />
    <div className="header__nav">
      <NavLink className="header__nav__acceuil" exact to="/">Accueil</NavLink>
      <NavLink className="header__nav__spots" to="/spots">Spots</NavLink>
      <NavLink className="header__nav__events" to="/evenements">Évènements</NavLink>
    </div>
    <input className="header__search" placeholder="search ..." />
    <img className="header__user" src={userIcon} alt="user" />
  </div>
);

export default Header;
