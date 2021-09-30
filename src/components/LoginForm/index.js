// x il faut gérer des champs controlés pour l'email et le mdp pour avoir les infos dans le state
// x à la soumission du form on va traduire l'intention de se connecter dans un middleware
//   x poser un écouteur au submit
//   x passer la foncion capable de dispatcher via les props
//     pour garder les branchements hors de LoginForm
//   x dispatcher une action au submit
//   x créer le middleware
//   x le donner au store
//   x traduire l'action dans le middleware cf étape suivante
// x dans le middleware on va faire l'appel à l'api pour envoyer le couple email/mdp
// x en fonction de la réponse de l'api on passera une info du state
//   à true pour dire qu'on est connecté
// - on va brancher nos composants en lecture via le hook de react-redux useSelector
//   pour récupérer l'info du state et la représenter

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from './Field';

import './style.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      <form autoComplete="off" className="login-form__element" onSubmit={handleSubmit}>
        <Field
          name="email"
          placeholder="Adresse Email"
          onChange={changeField}
          value={email}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
        <div className="login-form__stayconnected">
          <label htmlFor="noforget" className="login-form__label-checkbox">
            <input type="checkbox" id="noforget" name="noforget" className="login-form__checkbox" />
            Rester connecté
          </label>
          <Link className="login-form__link" to=""><span>Mot de passe oublié ?</span></Link>
        </div>
        <button
          type="submit"
          className="login-form__button"
        >
          Connexion
        </button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

// LoginForm.defaultProps = {
// };

export default LoginForm;
