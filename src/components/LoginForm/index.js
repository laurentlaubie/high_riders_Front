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
