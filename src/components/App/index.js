// == Import
import { Route, Switch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'src/components/Header';
import Result from 'src/components/Result';
import ErrorNotAuthorized from 'src/components/ErrorNotAuthorized';
import { useEffect } from 'react';
import Homepage from '../Homepage';
import Events from '../Events';
import Spots from '../Spots';
import LegalNotice from '../LegalNotice';
import Connection from '../Connection';
import ProfileSettings from '../ProfileSettings/ProfileForm';
import Profile from '../Profile';
import ProfileUpdate from '../ProfileUpdate';
import Spot from '../Spots/Spot';
import Footer from '../Footer';
import AddSpot from '../Spots/AddSpot';
import ContactUs from '../ContactUs';
import AboutUs from '../AboutUs';
import SiteMap from '../SiteMap';
import ErrorNotFound from '../ErrorNotFound';
import Event from '../Events/Event';
import AddEvent from '../Events/AddEvent';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);

  // Check for token and update application state if required
  const token = localStorage.getItem('token');
  const pseudo = localStorage.getItem('pseudo');
  const userid = localStorage.getItem('userid');

  if (token) {
    dispatch({
      type: 'SAVE_USER',
      pseudo: pseudo,
      userId: userid,
      token: token,
    });
  }

  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

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
          <ProfileSettings />
        </Route>
        <Route path="/connexion">
          <Connection />
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
        {logged && (
          <Route path="/modifier-profil">
            <ProfileUpdate />
          </Route>
        )}
        <Route path="/spots" exact>
          <Spots />
        </Route>
        <Route path="/evenements" exact>
          <Events />
        </Route>
        {logged && (
          <Route path="/profil">
            <Profile />
          </Route>
        )}
        {logged && (
          <Route path="/spots/:id" exact>
            <Spot />
          </Route>
        )}
        {logged && (
          <Route path="/ajout-spot">
            <AddSpot />
          </Route>
        )}
        {logged && (
          <Route path="/evenements/:id" exact>
            <Event />
          </Route>
        )}
        {logged && (
          <Route path="/ajout-evenement">
            <AddEvent />
          </Route>
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
        <Route path="/403">
          <ErrorNotAuthorized />
        </Route>
        <Route>
          <ErrorNotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
