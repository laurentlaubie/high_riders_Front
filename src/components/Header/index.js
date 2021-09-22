import { NavLink, Link } from 'react-router-dom';
import highridersLogo from './highridersLogo.png';
import userIcon from './userIcon.svg';
import menuIcon from './menuIcon.svg';
import './style.scss';

const Header = () => (
  <div className="header">
    <img className="header__menu" src={menuIcon} alt="menu" />
    <Link className="header__logo" to="/"><img className="header__logo__img" src={highridersLogo} alt="logo" /></Link>
    <div className="header__nav">
      <NavLink className="header__nav__acceuil" exact to="/">Accueil</NavLink>
      <NavLink className="header__nav__spots" to="/spots">Spots</NavLink>
      <NavLink className="header__nav__events" to="/evenements">Évènements</NavLink>
    </div>
    <input className="header__search" placeholder="search ..." />
    <Link className="header__user" to="/connexion"><img className="header__user__img" src={userIcon} alt="user" /></Link>
  </div>
);

export default Header;
