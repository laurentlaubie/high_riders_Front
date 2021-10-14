import { Link, useHistory, useParams } from 'react-router-dom';

import MapZoom from 'src/components/MapZoom';

import './style.scss';
import findIfParticipate from 'src/selectors/events';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Field from '../../Field';
import Comments from '../../Comments';

const Event = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const eventId = useSelector((state) => state.events.eventId);
  const loading = useSelector((state) => state.events.loadingEvent);
  const newcomment = useSelector((state) => state.events.newComment);
  const commentsData = useSelector((state) => state.events.eventId.comments);
  const userPart = useSelector((state) => state.events.eventId.participations);
  const participateUser = useSelector((state) => state.events.participateUser);
  const userId = useSelector((state) => state.user.userId);
  const togPart = useSelector((state) => state.events.togPart);

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_EVENT_VALUE',
      value: value,
      key: key,
    });
  };

  const getEventId = () => {
    dispatch({
      type: 'FETCH_EVENT_ID',
      id: id,
    });
  };

  const isParticipate = findIfParticipate(userPart, userId);

  dispatch({
    type: 'USER_IS_PARTICIPATING',
    participateUserEvent: isParticipate,
  });

  const handleToggleParticipate = () => {
    dispatch({
      type: 'TOGGLE_PARTICIPATE',
      participateUser: !participateUser,
    });
    dispatch({
      type: 'SEND_EVENT_PARTICIPATION',
      id: id,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'SEND_EVENT_COMMENT',
      id: id,
    });
  };

  const handleSubmitDeleteEvent = (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'DELETE_EVENT',
      id: id,
    });
    history.push('/evenements');
  };

  useEffect(() => {
    getEventId();
  }, []);

  return (
    <>
      {!loading && (
        <div className="event">
          <div className="event__container">
            <div className="event__title__container">
              <h2 className="event__title__container__title">{eventId.title}</h2>
              <img src={eventId.image} alt={eventId.title} className="event__title__container__img" />
            </div>
            <div className="event__infos">
              <div className="event__infos__meta">
                <div className="event__infos__meta__container">
                  <span className="event__infos__meta__container__number">{eventId.e_like ? eventId.e_like : '0'}</span>
                  <button type="button" className="event__infos__meta__container__button">J'aime</button>
                </div>
                <span className="event__infos__meta__event">{eventId.type_event}</span>
              </div>
              <span className="event__infos__description__tag">Déscription :</span>
              <p className="event__infos__description">{eventId.description}</p>
              <span className="event__infos__description__tag">Accès à l'évènement</span>
              <p className="event__infos__description">{eventId.accessibility || 'Pas d\'infos'}</p>
            </div>
            <div className="event__stats">
              {eventId.departement
                ? (
                  <div className="event__stats__container">
                    <span className="event__stats__tag">Département</span>
                    <span className="event__stats__name">{eventId.departement.title || ''}</span>
                  </div>
                ) : ''}
              {eventId.date_event ? (
                <div className="event__stats__container">
                  <span className="event__stats__tag">Date de l'évènement</span>
                  <span className="event__stats__name">{eventId.date_event}</span>
                </div>
              ) : ''}
              <div className="event__stats__container">
                <span className="event__stats__tag">Type d'évènement</span>
                <span className="event__stats__name">{eventId.type_event}</span>
              </div>
              <div className="event__stats__container">
                <span className="event__stats__tag">Disciplines</span>
                <span className="event__stats__name event__stats__name--cate">
                  {eventId.categories.map((elem) => (
                    <span key={elem.id}>{elem.title}</span>
                  ))}
                </span>
              </div>
              <div className="event__stats__container">
                <span className="event__stats__tag">Difficulté</span>
                <span className="event__stats__name">{eventId.difficulty}</span>
              </div>

              <div className="event__stats__container">
                <span className="event__stats__tag">Site internet</span>
                <a className="event__stats__name event__stats__name--link" href={eventId.link}>Lien du site</a>
              </div>
              <div className="event__stats__container">
                <span className="event__stats__tag">Tarif</span>
                <span className="event__stats__name">{eventId.price ? `${eventId.price} €` : '0 €'}</span>
              </div>
              <div className="event__stats__container">
                <span className="event__stats__tag">Horaires</span>
                <span className="event__stats__name">{eventId.opening_hours}-{eventId.closed_hours}</span>
              </div>
              <div className="event__stats__container">
                <span className="event__stats__tag">Nombre de participants</span>
                <span className="event__stats__name">{eventId.participation_user || '0'}</span>
              </div>
              {eventId.spot && (
                <div className="event__stats__container">
                  <span className="event__stats__tag">Spot lié</span>
                  <Link className="event__stats__name event__stats__name--link" to={`/spots/${eventId.spot.id}`}>Cliquer pour voir le spot</Link>
                </div>
              )}
            </div>
            <div className="event__map">
              <MapZoom
                zoom={13}
                coordinates={[eventId.latitude || 0, eventId.longitude || 0]}
                popupTitle={eventId.title}
              />
            </div>
            <div className="event__participate">
              {!togPart
              && !participateUser
                ? <button className="event__participate__button event__participate__button--dark" type="button" onClick={handleToggleParticipate}>Je participe</button>
                : <p>Participation à l'évènement prise en compte !</p>}
            </div>
            <div className="event__comments">
              <form className="event__comments__input" onSubmit={handleSubmit}>
                <Field
                  name="newComment"
                  placeholder="Ajouter un commentaire"
                  onChange={changeField}
                  value={newcomment}
                />
              </form>
              {commentsData.length > 0
                ? <Comments comments={commentsData} />
                : <p>Pas encore de commentaires ...</p>}
            </div>
            <form className="event__delete" onSubmit={handleSubmitDeleteEvent}>
              <button className="event__delete__button" type="submit">Supprimer l'event</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Event;
