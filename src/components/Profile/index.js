import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProfile } from '../../actions/profile';
import './style.scss';
import avatar from './avatar.png';

const Profil = () => {
  const id = useSelector((state) => state.user.userId);
  const lastname = useSelector((state) => state.user.lastname);
  const firstname = useSelector((state) => state.user.firstname);
  const pseudo = useSelector((state) => state.user.pseudo);
  const email = useSelector((state) => state.user.email);
  const presentation = useSelector((state) => state.user.presentation);
  const city = useSelector((state) => state.user.city);
  const equipement = useSelector((state) => state.user.equipement);
  const departement = useSelector((state) => state.user.departement);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile(id));
  }, []);

  return (
    <div className="profil">
      <h1 className="profil__title">Votre profil</h1>
      <img className="profil__avatar" src={avatar} alt="avatar" />
      <p className="name">Nom: {lastname}</p>
      <p className="firstname">Prénom: {firstname}</p>
      <p className="nickname">Pseudo: {pseudo}</p>
      <p className="county">Département: {departement}</p>
      <p className="email">Email: {email}</p>
      <p className="description">Description: {presentation}</p>
      <p className="city">Ville: {city}</p>
      <p className="gear">Equipement: {equipement}</p>
      <button className="profil__button" type="submit">Modifier votre profil</button>
    </div>
  );
};

export default Profil;
