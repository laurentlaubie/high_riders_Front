// == Import
import { Route, Switch } from 'react-router-dom';
import Header from 'src/components/Header';
import Homepage from '../Homepage';
import Evenements from '../Evenements';
import Spots from '../Spots';
import Connection from '../Connection';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/spots">
        <Spots />
      </Route>
      <Route path="/evenements">
        <Evenements />
      </Route>
      <Route path="/connection">
        <Connection />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
