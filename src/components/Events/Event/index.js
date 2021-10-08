// import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import BasicMap from 'src/components/BasicMap';

import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Field from '../../Field';
import Comments from '../../Comments';
// import data from 'src/data';

const Event = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const eventId = useSelector((state) => state.events.eventId);
  const loading = useSelector((state) => state.events.loading);
  const newcomment = useSelector((state) => state.events.newComment);
  const commentsData = useSelector((state) => state.events.eventId.comments);

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_EVENT_VALUE',
      value: value,
      key: key,
    });
  };

  const [participate, setParticipate] = useState(false);

  const handleToggleParticipate = () => {
    setParticipate(!participate);
  };

  const getEventId = () => {
    dispatch({
      type: 'FETCH_EVENT_ID',
      id: id,
    });
  };

  useEffect(() => {
    getEventId();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'SEND_EVENT_COMMENT',
      id: id,
    });
  };

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
              <div className="event__stats__container">
                <span className="event__stats__tag">Département</span>
                <span className="event__stats__name">{eventId.departement.title}</span>
              </div>
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
              <BasicMap
                zoom={13}
                coordinates={[eventId.latitude, eventId.longitude]}
                popupTitle={eventId.title}
              />
            </div>
            <div className="event__participate">
              {participate
                ? <button className="event__participate__button event__participate__button--dark" type="button" onClick={handleToggleParticipate}>Je participe</button>
                : <button className="event__participate__button event__participate__button--clear" type="button" onClick={handleToggleParticipate}>Je ne veux plus participer</button>}
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
          </div>
        </div>
      )}
    </>
  );
};

export default Event;
