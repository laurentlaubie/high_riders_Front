// == Import
import { Route, Switch, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'src/components/Header';
import Result from 'src/components/Result';
import Homepage from '../Homepage';
import Events from '../Events';
import Spots from '../Spots';
import LegalNotice from '../LegalNotice';
import Connection from '../Connection';
import Register from '../Register';
import { fetchHomeLasts } from '../../actions/home';
import { fetchSpotsList } from '../../actions/spots';
import Spot from '../Spots/Spot';
import Footer from '../Footer';
import ContactUs from '../ContactUs';
import AboutUs from '../AboutUs';
import SiteMap from '../SiteMap';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);

  useEffect(() => {
    dispatch(fetchHomeLasts());
    dispatch(fetchSpotsList());
  }, []);

  // -- gestion du scroll
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
    // console.log('le pathname a changé');
  }, [pathname]);

  // Check for token and update application state if required
  const token = localStorage.getItem('token');
  if (token) {
    dispatch({
      type: 'SAVE_USER',
    });
  }

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/resultats">
          <Result />
        </Route>
        <Route path="/inscription">
          <Register />
        </Route>
        {!logged
          && (
          <Route path="/connexion">
            <Connection />
          </Route>
          )}
        <Route path="/mot-de-passe-oublie">
          mot de passe oublie
        </Route>
        <Route path="/spots" exact>
          <Spots />
        </Route>
        <Route path="/evenements" exact>
          <Events />
        </Route>
        {logged && (
          <>
            <Route path="/profil">
              profil
            </Route>
            <Route path="/spots/:id" exact>
              <Spot />
            </Route>
            <Route path="/ajout-spot">
              ajout spot
            </Route>
            <Route path="/evenements/:id" exact>
              evenement (id)
            </Route>
            <Route path="/ajout-evenement">
              ajout-evenement
            </Route>
          </>
        )}
        <Route path="/nous-contacter">
          <ContactUs />
        </Route>
        <Route path="/mentions-legales">
          <LegalNotice />
        </Route>
        <Route path="/a-propos">
          <AboutUs />
        </Route>
        <Route path="/plan-du-site">
          <SiteMap />
        </Route>
        <Route>
          404
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
