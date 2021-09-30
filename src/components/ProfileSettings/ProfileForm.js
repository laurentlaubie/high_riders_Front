import { useDispatch } from 'react-redux';
import Input from './Input';
import avatar from './avatar.png';

import './style.scss';

const ProfileForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SAVE_USER',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="profile__form">
      <h1 className="profile__form--title">Editer votre profil</h1>
      <img className="profile__form--avatar" src={avatar} alt="avatar" />
      <Input
        type="text"
        placeholder="Nom"
        inputKey="name"
        className="profile__form--input"
      />
      <Input
        type="text"
        placeholder="Prénom"
        inputKey="firstname"
        className="profile__form--input"
      />
      <Input
        type="text"
        placeholder="Pseudo"
        inputKey="nickname"
        className="profile__form--input"
      />
      <Input
        placeholder="Email"
        aria-label="Email"
        type="email"
        inputKey="email"
        className="profile__form--input"
      />
      <Input
        placeholder="Mot de passe"
        aria-label="Mot de passe"
        type="password"
        title="Veuillez saisir le bon mot de passe"
        inputKey="password"
        className="profile__form--input"
      />
      <Input
        type="text"
        placeholder="Description"
        inputKey="description"
        className="profile__form--input"
      />
      <Input
        type="text"
        placeholder="Ville"
        inputKey="city"
        className="profile__form--input"
      />
      <Input
        type="text"
        placeholder="Equipement"
        inputKey="gear"
        className="profile__form--input"
      />
      {/* <div className="spot__stats__container">
        <span className="spot__stats__tag">Disciplines</span>
        <span className="spot__stats__name spot__stats__name--cate">
          {spotId.categories.map((elem) => (
            <span key={elem.id}>{elem.title}</span>
          ))}
        </span>
      </div> */}
      <button className="profile__form--button" type="submit">Envoyer</button>
    </form>
  );
};

export default ProfileForm;
