import { NavLink, Link, useHistory } from 'react-router-dom';
import highridersLogo from 'src/assets/images/highridersLogo.png';
import './style.scss';
import Search from 'src/components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logged = useSelector((state) => state.user.logged);
  const classMenu = useSelector((state) => state.user.classMenu);
  const classSearch = useSelector((state) => state.user.classSearch);

  const toggleMenu = () => {
    dispatch({
      type: 'TOGGLE_MENU',
      classMenu: !classMenu,
    });
  };

  const toggleSearch = () => {
    dispatch({
      type: 'TOGGLE_SEARCH',
      classSearch: !classSearch,
    });
  };

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    localStorage.removeItem('pseudo');
    history.push('/connexion');
    toast.success('Déconnecté', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  return (
    <div className="header">
      <div className={!classMenu ? 'header__invisible' : 'header__invisible--active'} />
      <div className={classMenu ? 'header__menu header__menu--active' : 'header__menu'} onClick={toggleMenu}>
        <div className={!classMenu ? 'header__menu--line1 header__menu--line' : 'header__menu--line1 header__menu--line header__menu--line1--active'} />
        <div className={!classMenu ? 'header__menu--line2 header__menu--line' : 'header__menu--line2 header__menu--line header__menu--line2--active'} />
        <div className={!classMenu ? 'header__menu--line3 header__menu--line' : 'header__menu--line3 header__menu--line header__menu--line3--active'} />
      </div>
      <Link className="header__logo" to="/"><img className="header__logo__img" src={highridersLogo} alt="logo" /></Link>
      <div className="header__invisible--active" />
      <div className={classMenu ? 'header__nav header__nav--active' : 'header__nav'}>
        <nav className="header__nav__menu">
          <NavLink activeClassName="header__nav__item--activ" className="header__nav__item" exact to="/" onClick={toggleMenu}>Accueil</NavLink>
          <NavLink activeClassName="header__nav__item--activ" className="header__nav__item" to="/spots" onClick={toggleMenu}>Spots</NavLink>
          <NavLink activeClassName="header__nav__item--activ" className="header__nav__item" to="/evenements" onClick={toggleMenu}>Évènements</NavLink>
        </nav>
        {logged
          ? (
            <div className="header__buttons">
              <Link className="header__button header__button--black" to="/profil" onClick={toggleMenu}>Profil</Link>
              <button
                onClick={() => {
                  handleLogout(); toggleMenu();
                }}
                type="button"
                className="header__button header__button--white"
              >Deconnexion
              </button>
            </div>
          )
          : (
            <div className="header__buttons">
              <Link className="header__button header__button--black" to="/connexion" onClick={toggleMenu}>Connexion</Link>
              <Link className="header__button header__button--white" to="/inscription" onClick={toggleMenu}>S'inscrire</Link>
            </div>
          )}
      </div>
      <FiSearch onClick={toggleSearch} className="header__input__logo" />
      <div className={!classSearch ? 'header__input__field' : 'header__input__field--active'}>
        <Search />
      </div>
    </div>
  );
};

export default Header;
