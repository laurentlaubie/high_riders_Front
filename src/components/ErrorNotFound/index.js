import { Link } from 'react-router-dom';
import './style.scss';

const ErrorNotFound = () => (
  <div className="ErrorNotFound">
    <h1 className="ErrorNotFound__titre404">404</h1>
    <Link className="ErrorNotFound__link404" to="/">Retour à l'accueil</Link>
    {/*  <img
      src="https://bestmtbgear.com/wp-content/uploads/2018/06/5abab9522ae8d.jpg"
      alt="404background"
      className="ErrorNotAuthorized__img404"
    /> */}
  </div>
);

export default ErrorNotFound;
