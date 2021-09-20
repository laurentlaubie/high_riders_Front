import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <NavLink exact to="/">Accueil</NavLink>
    <NavLink to="/spots">Spots</NavLink>
    <NavLink to="/evenements">Évènements</NavLink>
  </div>
);

export default Header;
