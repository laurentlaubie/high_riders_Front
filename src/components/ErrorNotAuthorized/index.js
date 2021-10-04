import { Link } from 'react-router-dom';
import './style.scss';

const ErrorNotAuthorized = () => (
  <div className="ErrorNotAuthorized">
    <h1 className="ErrorNotAuthorized__titre403">403</h1>
    <Link className="ErrorNotAuthorized__lien403" to="/">Retour à l'accueil</Link>
  </div>
);

export default ErrorNotAuthorized;
