// == Import
import { Route, Switch } from 'react-router-dom';
import Header from 'src/components/Header';
import Homepage from '../Homepage';
import Evenements from '../Evenements';
import Spots from '../Spots';
import Mentionslégales from '../Legal_notice'


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
      <Route path="/Legal_notice">
        <Mentionslégales>
        </Route>
    </Switch>
  );

// == Export
export default App;
