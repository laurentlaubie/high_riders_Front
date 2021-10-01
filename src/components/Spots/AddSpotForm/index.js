// import PropTypes from 'prop-types';

import Field from '../../LoginForm/Field';
import './style.scss';

const AddSpot = (
  email,
  password,
  changeField,
  handleLogin,
) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="add-spot">
      <h1>Ajouter un spot</h1>
      <form autoComplete="off" className="add-spot__element" onSubmit={handleSubmit}>
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
        <div className="add-spot__stayconnected">
          <label htmlFor="noforget" className="add-spot__label-checkbox">
            <input type="checkbox" id="noforget" name="noforget" className="add-spot__checkbox" />
            Rester connecté
          </label>
        </div>
        <button
          type="submit"
          className="add-spot__button"
        >
          Connexion
        </button>
      </form>
    </div>
  );
};

// AddSpot.propTypes = {

// };

export default AddSpot;
