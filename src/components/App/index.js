// == Import
import { Route, Switch } from 'react-router-dom';
import Header from 'src/components/Header';
import Accueil from '../Accueil';
import Evenements from '../Evenements';
import Spots from '../Spots';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/">
        <Accueil />
      </Route>
      <Route path="/spots">
        <Spots />
      </Route>
      <Route path="/evenements">
        <Evenements />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;