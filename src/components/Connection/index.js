import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';

const Connection = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const handleChangeEmail = (evt) => {
    dispatch({
      type: 'CHANGE_EMAIL_VALUE',
      value: evt.target.value,
    });
  };
  const handleChangePassword = (evt) => {
    dispatch({
      type: 'CHANGE_PASSWORD_VALUE',
      value: evt.target.value,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'LOGIN',
    });
  };

  return (
    <div className="connection">
      <form className="connection__form">
        <h1>Connexion</h1>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChangeEmail}
          value={email}
          className="connection__form__email"
        />
        <input
          name="password"
          placeholder="Mot de passe"
          onChange={handleChangePassword}
          value={password}
          className="connection__form__mdp"
        />
        <button
          type="submit"
          onSubmit={handleSubmit}
          className="connection__form__button"
        >
          Connexion
        </button>
        <Link className="connection__form__link" to=""><p>Mot de passe oublié ?</p></Link>
        <Link className="connection__form__link" to="/inscription"><p>Inscription</p></Link>
      </form>
    </div>
  );
};

export default Connection;
