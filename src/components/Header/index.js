import { NavLink, Link, useHistory } from 'react-router-dom';
import highridersLogo from 'src/assets/images/highridersLogo.png';
import menuIcon from 'src/assets/images/menuIcon.svg';
// import userIcon from 'src/assets/images/userIcon.svg';
import './style.scss';
import Search from 'src/components/Search';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logged = useSelector((state) => state.user.logged);

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
    localStorage.removeItem('token');
    history.push('/connexion');
  };

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
        ? (
          <div className="header__buttons">
            <Link className="header__button header__button--black" to="/profil">Profil</Link>
            <button onClick={handleLogout} type="button" className="header__button header__button--white">Deconnexion</button>
          </div>
        )
        : (
          <div className="header__buttons">
            <Link className="header__button header__button--black" to="/connexion">Se connecter</Link>
            <Link className="header__button header__button--white" to="/inscription">S'inscrire</Link>
          </div>
        )}

      {/* <Link className="header__user" to={!logged ? '/connexion' : '/profil'}>
        <img className="header__user__img" src={userIcon} alt="user" />
      </Link> */}
    </div>
  );
};

export default Header;
