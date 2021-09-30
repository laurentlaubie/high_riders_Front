import { NavLink, Link } from 'react-router-dom';
import highridersLogo from 'src/assets/images/highridersLogo.png';
import menuIcon from 'src/assets/images/menuIcon.svg';
// import userIcon from 'src/assets/images/userIcon.svg';
import './style.scss';
import Search from 'src/components/Search';
import { useSelector } from 'react-redux';

const Header = () => {
  const logged = useSelector((state) => state.user.logged);
  return (
    <div className="header">
      <img className="header__menu" src={menuIcon} alt="menu" />
      <Link className="header__logo" to="/"><img className="header__logo__img" src={highridersLogo} alt="logo" /></Link>
      <div className="header__nav">
        <NavLink className="header__nav__item" exact to="/">Accueil</NavLink>
        <NavLink className="header__nav__item" to="/spots">Spots</NavLink>
        <NavLink className="header__nav__item" to="/evenements">Évènements</NavLink>
      </div>
      <Search className="header__input" />
      {logged
        ? <Link className="header_button header_button--profil" to="/profil">Profil</Link>
        : (
          <div className="header_buttons">
            <Link className="header_button header_button--login" to="/connexion">Se connecter</Link>
            <Link className="header_button header_button--register" to="/inscription">S'inscrire</Link>
          </div>
        )}

      {/* <Link className="header__user" to={!logged ? '/connexion' : '/profil'}>
        <img className="header__user__img" src={userIcon} alt="user" />
      </Link> */}
    </div>
  );
};

export default Header;
