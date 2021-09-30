import { useDispatch } from 'react-redux';
import Input from './Input';

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
    <form onSubmit={handleSubmit} className="profile-form">
      <Input
        type="text"
        placeholder="Nom"
        inputKey="name"
      />
      <Input
        type="text"
        placeholder="Prénom"
        inputKey="firstname"
      />
      <Input
        type="text"
        placeholder="Pseudo"
        inputKey="nickname"
      />
      <Input
        placeholder="Email"
        aria-label="Email"
        type="email"
        inputKey="email"
      />
      <Input
        placeholder="Mot de passe"
        aria-label="Mot de passe"
        type="password"
        title="Veuillez saisir le bon mot de passe"
        inputKey="password"
      />
      <Input
        type="text"
        placeholder="Description"
        inputKey="description"
      />
      <Input
        type="text"
        placeholder="Ville"
        inputKey="city"
      />
      <Input
        type="text"
        placeholder="Equipement"
        inputKey="gear"
      />
      <button className="profile-btn" type="submit">Envoyer</button>
    </form>
  );
};

export default ProfileForm;
