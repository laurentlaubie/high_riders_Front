import { NavLink, Link, useHistory } from 'react-router-dom';
import highridersLogo from 'src/assets/images/highridersLogo.png';
// import menuIcon from 'src/assets/images/menuIcon.svg';
// import userIcon from 'src/assets/images/userIcon.svg';
import './style.scss';
import Search from 'src/components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logged = useSelector((state) => state.user.logged);

  const [classMenu, setClassMenu] = useState(false);

  const toggleMenu = () => {
    setClassMenu(!classMenu);
  };

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    localStorage.removeItem('pseudo');
    history.push('/connexion');
  };

  return (
    <div className="header">
      <div className={classMenu ? 'header__menu header__menu--active' : 'header__menu'} onClick={toggleMenu}>
        <div className={!classMenu ? 'header__menu--line1 header__menu--line' : 'header__menu--line1 header__menu--line header__menu--line1--active'} />
        <div className={!classMenu ? 'header__menu--line2 header__menu--line' : 'header__menu--line2 header__menu--line header__menu--line2--active'} />
        <div className={!classMenu ? 'header__menu--line3 header__menu--line' : 'header__menu--line3 header__menu--line header__menu--line3--active'} />
      </div>
      {/* <img
        className={classMenu ? 'header__menu header__menu--active' : 'header__menu'}
        src={menuIcon}
        alt="menu"
        onClick={toggleMenu}
      /> */}
      <Link className="header__logo" to="/"><img className="header__logo__img" src={highridersLogo} alt="logo" /></Link>
      <div className={classMenu ? 'header__nav header__nav--active' : 'header__nav'}>
        <NavLink className="header__nav__item" exact to="/" onClick={toggleMenu}>Accueil</NavLink>
        <NavLink className="header__nav__item" to="/spots" onClick={toggleMenu}>Spots</NavLink>
        <NavLink className="header__nav__item" to="/evenements" onClick={toggleMenu}>Évènements</NavLink>
        {logged
          ? (
            <div className="header__buttons">
              <Link className="header__button header__button--black" to="/profil">Profil</Link>
              <button onClick={handleLogout} type="button" className="header__button header__button--white">Deconnexion</button>
            </div>
          )
          : (
            <div className="header__buttons">
              <Link className="header__button header__button--black" to="/connexion">Connexion</Link>
              <Link className="header__button header__button--white" to="/inscription">S'inscrire</Link>
            </div>
          )}
      </div>
      <Search className="header__input" />
    </div>
  );
};

export default Header;
