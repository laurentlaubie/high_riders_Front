// == Import
import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'src/components/Header';
import Result from 'src/components/Result';
import Homepage from '../Homepage';
import Events from '../Events';
import Spots from '../Spots';
import LegalNotice from '../LegalNotice';
import Connection from '../Connection';
import ProfileSettings from '../ProfileSettings/ProfileForm';
import Profile from '../Profile';
import { fetchHomeLasts } from '../../actions/home';
import { fetchSpotsList } from '../../actions/spots';
import Spot from '../Spots/Spot';

// == Composant
const App = () => {
  const dispatch = useDispatch();
  const logged = true;

  useEffect(() => {
    dispatch(fetchHomeLasts());
    dispatch(fetchSpotsList());
  }, []);

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
        <Route path="/mot-de-passe-oublie">
          mot de passe oublie
        </Route>
        {logged && (
          <Route path="/profil">
            <Profile />
          </Route>
        )}
        <Route path="/spots" exact>
          <Spots />
        </Route>
        <Route path="/spots/:id" exact>
          <Spot />
        </Route>
        <Route path="/ajout-spot">
          ajout spot
        </Route>
        <Route path="/evenements" exact>
          <Events />
        </Route>
        <Route path="/evenements/:id" exact>
          evenement (id)
        </Route>
        <Route path="/Legal_notice">
          <LegalNotice />
        </Route>
        <Route path="/evenements/:id">
          evenement (id)
        </Route>
        <Route path="/ajout-evenement">
          ajout-evenement
        </Route>
        <Route path="/nous-contacter">
          nous contacter
        </Route>
        <Route path="/mentions-legales">
          mentions legales
        </Route>
        <Route path="/a-propos">
          a propos
        </Route>
        <Route path="/plan-du-site">
          plan du site
        </Route>
        <Route>
          404
        </Route>
      </Switch>
    </div>
  );
};

// == Export
export default App;
