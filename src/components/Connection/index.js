import { Link } from 'react-router-dom';
import './style.scss';

const Connection = () => (
  <div className="connection">
    <form className="connection__form">
      <h1>Connexion</h1>
      <input className="connection__form__email" placeholder="e-mail ..." />
      <input className="connection__form__mdp" placeholder="mot de passe ..." />
      <Link className="connection__form__link" to=""><p>Mot de passe oublié ?</p></Link>
    </form>
  </div>
);

export default Connection;
