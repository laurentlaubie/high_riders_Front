import { Link } from 'react-router-dom';
import './style.scss';

const ErrorNotAuthorized = () => (
  <div className="ErrorNotAuthorized">
    <h1 className="ErrorNotAuthorized__titre403">403</h1>
    <Link className="ErrorNotAuthorized__lien403" to="/">Retour à l'accueil</Link>
    <img
      src="https://previews.123rf.com/images/martyhaas/martyhaas1205/martyhaas120500011/13534178-private-property-no-trespassing-sign-in-front-of-a-path-into-a-beautiful-wooded-land.jpg"
      alt="403background"
      className="ErrorNotAuthorized__img403"
    />
  </div>
);

export default ErrorNotAuthorized;
