import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProfile } from '../../actions/profile';
import './style.scss';

const Profil = () => {
  const id = useSelector((state) => state.user.userId);
  const profileData = useSelector((state) => state.user.profileData);
  console.log(profileData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile(id));
  }, []);

  return (
    <div className="profil">
      <h1 className="profil__title">Votre profil</h1>
      <div className="profil__avatar"><img className="profil__avatar__image" src={profileData.avatar} alt="avatar" /></div>
      <div className="profil__data profil__name"><span className="profil__tag-title">Nom: </span><span>{profileData.lastname}</span></div>
      <div className="profil__data profil__firstname"><span className="profil__tag-title">Prénom: </span><span>{profileData.firstname}</span></div>
      <div className="profil__data profil__nickname"><span className="profil__tag-title">Pseudo: </span><span>{profileData.pseudo}</span></div>
      <div className="profil__data profil__county"><span className="profil__tag-title">Département: </span><span>{profileData.departement}</span></div>
      <div className="profil__data profil__email"><span className="profil__tag-title">Email: </span><span>{profileData.email}</span></div>
      <div className="profil__data profil__description"><span className="profil__tag-title">Description: </span><span>{profileData.presentation}</span></div>
      <div className="profil__data profil__city"><span className="profil__tag-title">Ville: </span><span>{profileData.city}</span></div>
      <div className="profil__data profil__gear"><span className="profil__tag-title">Equipement: </span><span>{profileData.equipement}</span></div>
      <Link className="profil__button" to="/inscription">Modifier votre profil</Link>
    </div>
  );
};

export default Profil;
