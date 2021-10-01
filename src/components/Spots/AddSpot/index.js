import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddSpotForm from '../AddSpotForm';
import './style.scss';

const Connection = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.spots.titleNewSpot);
  const address = useSelector((state) => state.spots.addressNewSpot);

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
        <AddSpotForm
          title={title}
          address={address}
          changeField={changeField}
          handleLogin={login}
        />
        <span className="connection-form__links">Pas encore enregistré ? <Link className="connection-form__link" to="/inscription"><span>Créer un compte</span></Link></span>
      </div>
    </div>
  );
};

export default Connection;
