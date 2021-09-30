import { NavLink } from 'react-router-dom';
import './style.scss';

const Footer = () => (
  <div className="footer">
    <NavLink className="footer__nav__item" exact to="/LegalNotice">Mentions légales</NavLink>
    <NavLink className="footer__nav__item" to="/AboutUs">A propos de nous</NavLink>
    <NavLink className="footer__nav__item" to="/SiteMap">Plan de site</NavLink>
    <NavLink className="footer__nav__item" to="/ContactUs">Nous contacter</NavLink>
  </div>
);

export default Footer;
