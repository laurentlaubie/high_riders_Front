import { useDispatch, useSelector } from 'react-redux';
import Field from 'src/components/Field';
import SelectInfos from 'src/components/SelectInfos';

import './style.scss';
import { useEffect } from 'react';
import { fetchSpotsList } from '../../actions/spots';

const ProfileForm = () => {
  const dispatch = useDispatch();
  const newImageRegister = useSelector((state) => state.user.newImageRegister);
  const newNameRegister = useSelector((state) => state.user.newNameRegister);
  const newPrenomRegister = useSelector((state) => state.user.newPrenomRegister);
  const newPseudoRegister = useSelector((state) => state.user.newPseudoRegister);
  const newEmailRegister = useSelector((state) => state.user.newEmailRegister);
  const newConfirmEmailRegister = useSelector((state) => state.user.newConfirmEmailRegister);
  const newPasswordRegister = useSelector((state) => state.user.newPasswordRegister);
  const newConfirmPasswordRegister = useSelector((state) => state.user.newConfirmPasswordRegister);
  const newEquipementRegister = useSelector((state) => state.user.newEquipementRegister);
  const newDescriptionRegister = useSelector((state) => state.user.newDescriptionRegister);
  const newCityRegister = useSelector((state) => state.user.newCityRegister);
  const newDepartementRegister = useSelector((state) => state.user.newDepartementRegister);
  const spotsDeparts = useSelector((state) => state.spots.spotsDeparts);

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_VALUE',
      value: value,
      key: key,
    });
  };

  useEffect(() => {
    dispatch(fetchSpotsList());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_PROFILE',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="profile__form">
      <h1 className="profile__form--title">Inscription</h1>
      <Field
        name="newImageRegister"
        placeholder="Lien de l'avatar"
        onChange={changeField}
        value={newImageRegister}
      />
      <Field
        name="newNameRegister"
        placeholder="Nom"
        onChange={changeField}
        value={newNameRegister}
      />
      <Field
        name="newPrenomRegister"
        placeholder="Prénom"
        onChange={changeField}
        value={newPrenomRegister}
      />
      <Field
        name="newPseudoRegister"
        placeholder="Pseudo"
        onChange={changeField}
        value={newPseudoRegister}
      />
      <Field
        name="newEmailRegister"
        placeholder="Email"
        onChange={changeField}
        value={newEmailRegister}
      />
      <Field
        name="newConfirmEmailRegister"
        placeholder="Confirmer l'email"
        onChange={changeField}
        value={newConfirmEmailRegister}
      />
      <Field
        name="newPasswordRegister"
        placeholder="Mot de passe"
        type="password"
        onChange={changeField}
        value={newPasswordRegister}
      />
      <Field
        name="newConfirmPasswordRegister"
        placeholder="Confirmer le mot de passe"
        type="password"
        onChange={changeField}
        value={newConfirmPasswordRegister}
      />
      <Field
        name="newDescriptionRegister"
        placeholder="Description"
        onChange={changeField}
        value={newDescriptionRegister}
      />
      <Field
        name="newCityRegister"
        placeholder="Ville"
        onChange={changeField}
        value={newCityRegister}
      />
      <SelectInfos
        value={newDepartementRegister}
        name="newDepartementRegister"
        data={spotsDeparts}
        placeholder="Département"
        onChange={changeField}
      />
      <Field
        name="newEquipementRegister"
        placeholder="Equipement"
        onChange={changeField}
        value={newEquipementRegister}
      />
      <button className="profile__form--button" type="submit">Envoyer</button>
    </form>
  );
};

export default ProfileForm;
