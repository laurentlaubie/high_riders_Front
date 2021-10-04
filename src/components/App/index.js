// == Import
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'src/components/Header';
import Result from 'src/components/Result';
import ErrorNotAuthorized from 'src/components/ErrorNotAuthorized';
import Homepage from '../Homepage';
import Events from '../Events';
import Spots from '../Spots';
import LegalNotice from '../LegalNotice';
import Connection from '../Connection';
import Register from '../Register';
import Spot from '../Spots/Spot';
import Footer from '../Footer';
import AddSpot from '../Spots/AddSpot';
import ContactUs from '../ContactUs';
import AboutUs from '../AboutUs';
import SiteMap from '../SiteMap';
import ErrorNotFound from '../ErrorNotFound';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);

  // Check for token and update application state if required
  const token = localStorage.getItem('token');
  if (token) {
    dispatch({
      type: 'SAVE_USER',
      token: token,
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
          <Route path="/profil">
            profil
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
            evenement (id)
          </Route>
        )}
        {logged && (
          <Route path="/ajout-evenement">
            ajout-evenement
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
        <Route path="/erreur">
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
