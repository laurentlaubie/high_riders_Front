import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Select from 'src/components/Select';
import { fetchSpotsList } from '../../actions/spots';

import Input from './Input';
import avatar from './avatar.png';

import './style.scss';

const ProfileForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_PROFILE',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="profile__form">
      <h1 className="profile__form--title">Editer votre profil</h1>
      <img className="profile__form--avatar" src={avatar} alt="avatar" />
      <Input
        type="text"
        placeholder="Nom"
        inputKey="lastname"
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
        inputKey="pseudo"
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
        inputKey="presentation"
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
        inputKey="equipement"
        className="profile__form--input"
      />
      <button className="profile__form--button" type="submit">Envoyer</button>
    </form>
  );
};

export default ProfileForm;
