import { useSelector } from 'react-redux';
import './style.scss';
import avatar from './avatar.png';

const Profil = () => {
  const lastname = useSelector((state) => state.user.lastname);
  const firstname = useSelector((state) => state.user.firstname);
  const pseudo = useSelector((state) => state.user.pseudo);
  const email = useSelector((state) => state.user.email);
  const presentation = useSelector((state) => state.user.presentation);
  const city = useSelector((state) => state.user.city);
  const equipement = useSelector((state) => state.user.equipement);
  const departement = useSelector((state) => state.user.departement);

  return (
    <div className="profil">
      <h1 className="profil__title">Votre profil</h1>
      <img className="profil__avatar" src={avatar} alt="avatar" />
      <p className="name">{lastname}</p>
      <p className="firstname">{firstname}</p>
      <p className="nickname">{pseudo}</p>
      <p className="county">{departement}</p>
      <p className="email">{email}</p>
      <p className="description">{presentation}</p>
      <p className="city">{city}</p>
      <p className="gear">{equipement}</p>
      <button className="profil__button" type="submit">Modifier votre profil</button>
    </div>
  );
};

export default Profil;
