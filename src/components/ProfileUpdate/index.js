import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Select from 'src/components/Select';
import Input from '../ProfileSettings/Input';
import avatar from '../ProfileSettings/avatar.png';
import { fetchSpotsList } from '../../actions/spots';

import './style.scss';

const ProfileUpdate = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.userId);
  const departValue = useSelector((state) => state.spots.departValue);
  const spotsDeparts = useSelector((state) => state.spots.spotsDeparts);
  const spotsCate = useSelector((state) => state.spots.spotsCate);
  const spotDisci = useSelector((state) => state.spots.spotDisci);

  useEffect(() => {
    dispatch(fetchSpotsList());
  }, []);

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_SPOT_VALUE',
      value: value,
      key: key,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_PROFILE',
      id: id,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="profile__form">
      <h1 className="profile__form--title">Modifier votre profil</h1>
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
      <div className="profile__form--selector">
        <Select
          value={departValue}
          name="departValue"
          data={spotsDeparts}
          placeholder="Département"
          onChange={changeField}
        />
      </div>
      <div className="profile__form--selector">
        <Select
          value={spotDisci}
          name="spotDisci"
          data={spotsCate}
          placeholder="Disciplines"
          onChange={changeField}
        />
      </div>
      <button className="profile__form--button" type="submit">Envoyer</button>
    </form>
  );
};

export default ProfileUpdate;
