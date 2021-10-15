import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from 'src/components/Loading';
import { AiOutlineLink } from 'react-icons/ai';
import { fetchProfile } from '../../actions/profile';
import './style.scss';

const Profil = () => {
  const id = useSelector((state) => state.user.userId);
  const profileData = useSelector((state) => state.user.profileData);
  const loading = useSelector((state) => state.user.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile(id));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="profil">
      <div className="profil__avatar">
        <img className="profil__avatar__image" src={profileData.avatar} alt="avatar" />
        <span>{profileData.lastname}</span>
        <span>{profileData.firstname}</span>
      </div>
      <div className="profil__data">
        <span className="profil__tag-title">Présentation </span>
        <span className="profil__tag-data">{profileData.presentation}</span>
      </div>
      <div className="profil__data">
        <span className="profil__tag-title">Email </span>
        <span className="profil__tag-data">{profileData.email}</span>
        <span className="profil__tag-title">Pseudo </span>
        <span className="profil__tag-data">{profileData.pseudo}</span>
        <span className="profil__tag-title">Ville </span>
        <span className="profil__tag-data">{profileData.city}</span>
        <span className="profil__tag-title">Département </span>
        <span className="profil__tag-data">{profileData.departement}</span>
      </div>
      <div className="profil__data">
        <span className="profil__tag-title">Equipement </span>
        <span className="profil__tag-data">{profileData.equipement}</span>
        <span className="profil__tag-title">Discipline </span>
        <div className="profil__data__participations">{profileData.categories.map((elem) => <span key={elem.id} className="profil__tag-data">{elem.title}</span>)}</div>
      </div>
      <div className="profil__data">
        <span className="profil__tag-title">Spots crées </span>
        <div className="profil__data__participations">{profileData.spots.map((elem) => (
          <Link className="profil__tag-data-link" key={elem.id} to={`/spots/${elem.id}`}>{elem.title}<AiOutlineLink className="profil__tag-data-link__icon" /></Link>
        ))}
        </div>
      </div>
      <div className="profil__data">
        <span className="profil__tag-title">Evènements crées </span>
        <div className="profil__data__participations">{profileData.events.map((elem) => (
          <Link className="profil__tag-data-link" key={elem.id} to={`/evenements/${elem.id}`}>{elem.title}<AiOutlineLink className="profil__tag-data-link__icon" /></Link>
        ))}
        </div>
      </div>
      <div className="profil__data">
        <span className="profil__tag-title">Participations </span>
        <div className="profil__data__participations">{profileData.participations.map((elem) => (
          <Link className="profil__tag-data-link" key={elem.event.id} to={`/evenements/${elem.event.id}`}>{elem.event.title}<AiOutlineLink className="profil__tag-data-link__icon" /></Link>
        ))}
        </div>
      </div>
      <Link className="profil__button" to="/modifier-profil">Modifier le profil</Link>
    </div>
  );
};

export default Profil;
