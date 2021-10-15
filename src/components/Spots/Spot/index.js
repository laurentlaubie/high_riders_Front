import { useHistory, useParams } from 'react-router-dom';

import MapZoom from 'src/components/MapZoom';
import { IoIosSend } from 'react-icons/io';

import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSpotId } from '../../../actions/spots';
import Comments from '../../Comments';
import Field from '../../Field';

const Spot = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const spotId = useSelector((state) => state.spots.spotId);
  const loading = useSelector((state) => state.spots.loadingSpot);
  const newcomment = useSelector((state) => state.spots.newComment);
  const commentsData = useSelector((state) => state.spots.spotId.comments);
  const isLiked = useSelector((state) => state.spots.isLiked);
  const nbLikesStorage = useSelector((state) => state.spots.nbLikesStorage);
  const userId = useSelector((state) => state.user.userId);

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_SPOT_VALUE',
      value: value,
      key: key,
    });
  };

  const handleLike = () => {
    dispatch({
      type: 'ADD_LIKE_SPOT',
      id: id,
      isLiked: !isLiked,
      calcLikes: nbLikesStorage + 1,
    });
  };

  const handleDislike = () => {
    dispatch({
      type: 'ADD_DISLIKE_SPOT',
      id: id,
      isLiked: !isLiked,
      calcLikes: nbLikesStorage - 1,
    });
  };

  const handleSubmitDeleteSpot = (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'DELETE_SPOT',
      id: id,
    });
    history.push('/spots');
  };

  const getSpotId = () => {
    dispatch(fetchSpotId(id));
  };

  useEffect(() => {
    getSpotId();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'SEND_SPOT_COMMENT',
      id: id,
    });
  };

  localStorage.setItem('likesNumbers', nbLikesStorage);
  localStorage.setItem('isLiked', isLiked);

  const localIsLiked = localStorage.getItem('isLiked');
  const localIsLikedReplaced = localIsLiked === 'true';

  console.log(localIsLikedReplaced);

  return (
    <>
      {!loading && (
      <div className="spot">
        <div className="spot__container">
          <div className="spot__title__container">
            <h2 className="spot__title__container__title">{spotId.title}</h2>
            <img src={spotId.image} alt={spotId.title} className="spot__title__container__img" />
          </div>
          <div className="spot__infos">
            <div className="spot__infos__meta">
              <div className="spot__infos__meta__container">
                <span className="spot__infos__meta__container__number">{spotId.s_like ? nbLikesStorage : '0'}</span>
                {localIsLikedReplaced
                  ? <button type="button" className="spot__infos__meta__container__button" onClick={handleLike}>J'aime</button>
                  : <button type="button" className="spot__infos__meta__container__button" onClick={handleDislike}>Je n'aime plus</button>}
              </div>
              <span className="spot__infos__meta__event">{spotId.type_spot}</span>
            </div>
            <span className="spot__infos__description__tag">Déscription :</span>
            <p className="spot__infos__description">{spotId.description}</p>
            <span className="spot__infos__description__tag">Accès à l'évènement</span>
            <p className="spot__infos__description">{spotId.accessibility || 'Pas d\'infos'}</p>
          </div>
          <div className="spot__stats">
            <div className="spot__stats__container">
              <span className="spot__stats__tag">Localisation</span>
              <span className="spot__stats__name">{spotId.city}</span>
            </div>
            {spotId.departement
              ? (
                <div className="spot__stats__container">
                  <span className="spot__stats__tag">Département</span>
                  <span className="spot__stats__name">{spotId.departement.title || ''}</span>
                </div>
              ) : ''}
            {spotId.saison_date ? (
              <div className="spot__stats__container">
                <span className="spot__stats__tag">Date des saisons</span>
                <span className="spot__stats__name">{spotId.saison_date}</span>
              </div>
            ) : ''}
            <div className="spot__stats__container">
              <span className="spot__stats__tag">Type de spot</span>
              <span className="spot__stats__name">{spotId.type_spot}</span>
            </div>
            <div className="spot__stats__container">
              <span className="spot__stats__tag">Disciplines</span>
              <span className="spot__stats__name spot__stats__name--cate">
                {spotId.categories.map((elem) => (
                  <span key={elem.id}>{elem.title}</span>
                ))}
              </span>
            </div>
            <div className="spot__stats__container">
              <span className="spot__stats__tag">Difficulté</span>
              <span className="spot__stats__name">{spotId.difficulty}</span>
            </div>
            <div className="spot__stats__container">
              <span className="spot__stats__tag">Dénivelé positif</span>
              <span className="spot__stats__name">{spotId.d_positif || '-'}</span>
            </div>
            <div className="spot__stats__container">
              <span className="spot__stats__tag">Dénivelé négatif</span>
              <span className="spot__stats__name">{spotId.d_negatif || '-'}</span>
            </div>
            <div className="spot__stats__container">
              <span className="spot__stats__tag">Site internet</span>
              <a className="spot__stats__name spot__stats__name--link" href={spotId.link}>Lien du site</a>
            </div>
            <div className="spot__stats__container">
              <span className="spot__stats__tag">Tarif</span>
              <span className="spot__stats__name">{spotId.price ? `${spotId.price} €` : '0 €'}</span>
            </div>
            <div className="spot__stats__container">
              <span className="spot__stats__tag">Horaires</span>
              <span className="spot__stats__name">{spotId.openingHours}-{spotId.closed_hours}</span>
            </div>
            <div className="spot__stats__container">
              <span className="spot__stats__tag">Nombre d'utilisateurs</span>
              <span className="spot__stats__name">{spotId.numbers_users}</span>
            </div>
            <div className="spot__stats__container">
              <span className="spot__stats__tag">Note Moyenne</span>
              <span className="spot__stats__name">{spotId.average_rating}</span>
            </div>
          </div>
          <div className="spot__map">
            <MapZoom
              zoom={13}
              coordinates={[spotId.latitude || 0, spotId.longitude || 0]}
              popupTitle={`${spotId.title}, ${spotId.address}`}
            />
          </div>
          <form className="spot__comments" onSubmit={handleSubmit}>
            <div className="spot__input__send-zone">
              <Field
                name="newComment"
                placeholder="Ajouter un commentaire"
                onChange={changeField}
                value={newcomment}
                className="spot__comments__input"
              />
              <button className="spot__input__send-zone__button" type="submit"> <IoIosSend className="spot__input__send-zone__button__logo" /> </button>
            </div>
            {commentsData.length > 0
              ? <Comments comments={commentsData} />
              : <p>Pas encore de commentaires ...</p>}
          </form>
          {spotId.author.id === Number(userId)
            ? (
              <form className="spot__delete" onSubmit={handleSubmitDeleteSpot}>
                <button className="spot__delete__button" type="submit">Supprimer le spot</button>
              </form>
            ) : ''}
        </div>
      </div>
      )}
    </>
  );
};

export default Spot;
