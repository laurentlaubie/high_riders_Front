import { NavLink } from 'react-router-dom';
import highridersLogo from './highridersLogo.png';

const Header = () => (
  <div>
    <img src={highridersLogo} alt="logo" />
    <NavLink exact to="/">Accueil</NavLink>
    <NavLink to="/spots">Spots</NavLink>
    <NavLink to="/evenements">Évènements</NavLink>
  </div>
);

export default Header;
