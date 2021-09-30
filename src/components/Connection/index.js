import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
import './style.scss';

const Connection = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_VALUE',
      value: value,
      key: key,
    });
  };

  const login = () => {
    dispatch({
      type: 'LOGIN',
    });
  };

  return (
    <div className="connection">
      <div className="connection-form">
        <h1>Connexion</h1>
        <LoginForm
          email={email}
          password={password}
          changeField={changeField}
          handleLogin={login}
        />
        <span className="connection-form__links">Pas encore enregistré ? <Link className="connection-form__link" to="/inscription"><span>Créer un compte</span></Link></span>
      </div>
    </div>
  );
};

export default Connection;
