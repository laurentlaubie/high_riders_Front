import { useSelector } from 'react-redux';
import './style.scss';
import avatar from './avatar.png';

const Profil = () => {
  const name = useSelector((state) => state.user.name);
  const firstname = useSelector((state) => state.user.firstname);
  const nickname = useSelector((state) => state.user.nickname);
  const email = useSelector((state) => state.user.email);
  const description = useSelector((state) => state.user.description);
  const city = useSelector((state) => state.user.city);
  const gear = useSelector((state) => state.user.gear);

  return (
    <div className="profil">
      <h1 className="profil__title">Votre profil</h1>
      <img className="profil__avatar" src={avatar} alt="avatar" />
      <p className="name">{name}</p>
      <p className="firstname">{firstname}</p>
      <p className="nickname">{nickname}</p>
      <p className="email">{email}</p>
      <p className="description">{description}</p>
      <p className="city">{city}</p>
      <p className="gear">{gear}</p>
      <button className="profil__button" type="submit">Modifier votre profil</button>
    </div>
  );
};

export default Profil;
