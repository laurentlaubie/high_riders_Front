import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import SelectInfos from 'src/components/SelectInfos';
import Field from 'src/components/Field';
import { useHistory } from 'react-router-dom';
import { fetchSpotsList } from '../../actions/spots';

import './style.scss';
import { fetchProfile } from '../../actions/profile';

const ProfileUpdate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = useSelector((state) => state.user.userId);
  const usersDeparts = useSelector((state) => state.spots.spotsDeparts);
  const profileAvatar = useSelector((state) => state.user.profileAvatar);
  // const profileCategories = useSelector((state) => state.user.profileCategories);
  const profileCity = useSelector((state) => state.user.profileCity);
  const profileDepartement = useSelector((state) => state.user.profileDepartement);
  const profileEmail = useSelector((state) => state.user.profileEmail);
  const profileEquipement = useSelector((state) => state.user.profileEquipement);
  // const profileEvents = useSelector((state) => state.user.profileEvents);
  const profileFirstname = useSelector((state) => state.user.profileFirstname);
  const profileLastname = useSelector((state) => state.user.profileLastname);
  // const profileParticipations = useSelector((state) => state.user.profileParticipations);
  const profilePresentation = useSelector((state) => state.user.profilePresentation);
  const profilePseudo = useSelector((state) => state.user.profilePseudo);
  // const profileSpots = useSelector((state) => state.user.profileSpots);
  const newPasswordUpdate = useSelector((state) => state.user.newPasswordUpdate);
  const newPasswordUpdateConfirm = useSelector((state) => state.user.newPasswordUpdateConfirm);

  useEffect(() => {
    dispatch(fetchSpotsList());
    dispatch(fetchProfile(id));
  }, []);

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_VALUE',
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

  const handleSubmitDelete = (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'DELETE_PROFILE',
      id: id,
    });
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    localStorage.removeItem('pseudo');
    history.push('/connexion');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="profile__form">
        <h1 className="profile__form--title">Modifier votre profil</h1>
        <Field
          name="profileAvatar"
          placeholder="Lien de l'avatar"
          onChange={changeField}
          value={profileAvatar}
        />
        <Field
          name="profileLastname"
          placeholder="Nom"
          onChange={changeField}
          value={profileLastname}
        />
        <Field
          name="profileFirstname"
          placeholder="Prénom"
          onChange={changeField}
          value={profileFirstname}
        />
        <Field
          name="profilePseudo"
          placeholder="Pseudo"
          onChange={changeField}
          value={profilePseudo}
        />
        <Field
          name="profileEmail"
          placeholder="Email"
          onChange={changeField}
          value={profileEmail}
        />
        <Field
          name="profilePresentation"
          placeholder="Présentation"
          onChange={changeField}
          value={profilePresentation}
        />
        <Field
          name="profileCity"
          placeholder="Ville"
          onChange={changeField}
          value={profileCity}
        />
        <SelectInfos
          value={profileDepartement}
          name="profileDepartement"
          data={usersDeparts}
          placeholder="Département"
          onChange={changeField}
        />
        <Field
          name="profileEquipement"
          placeholder="Equipement"
          onChange={changeField}
          value={profileEquipement}
        />
        <Field
          name="newPasswordUpdate"
          placeholder="Nouveau mot de passe"
          onChange={changeField}
          value={newPasswordUpdate}
        />
        <Field
          name="newPasswordUpdateConfirm"
          placeholder="Confirmer le nouveau mot de passe"
          onChange={changeField}
          value={newPasswordUpdateConfirm}
        />
        <button className="profile__form--button" type="submit">Envoyer</button>
      </form>
      <form className="form__delete" onSubmit={handleSubmitDelete}>
        <button className="form__delete__button" type="submit">Supprimer le compte</button>
      </form>
    </>
  );
};

export default ProfileUpdate;
