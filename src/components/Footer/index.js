import { NavLink } from 'react-router-dom';
import './style.scss';

const Footer = () => (
  <div className="footer">
    <NavLink className="footer__nav__item" to="/mentions-legales">Mentions légales</NavLink>
    <NavLink className="footer__nav__item" to="/a-propos">A propos de nous</NavLink>
    <NavLink className="footer__nav__item" to="/plan-du-site">Plan de site</NavLink>
    <NavLink className="footer__nav__item" to="/nous-contacter">Nous contacter</NavLink>
  </div>
);

export default Footer;
