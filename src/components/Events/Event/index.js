// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import BasicMap from 'src/components/BasicMap';

import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import data from 'src/data';

const Event = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const eventId = useSelector((state) => state.events.eventId);
  const loading = useSelector((state) => state.events.loading);
  console.log(eventId);

  const getEventId = () => {
    dispatch({
      type: 'FETCH_EVENT_ID',
      id: id,
    });
  };

  useEffect(() => {
    getEventId();
  }, []);

  // const { latitude, longitude } = eventId;

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
                <span className="event__stats__tag">Localisation</span>
                <span className="event__stats__name">{eventId.city}</span>
              </div>
              <div className="event__stats__container">
                <span className="event__stats__tag">Département</span>
                <span className="event__stats__name">{eventId.departement.title}</span>
              </div>
              {eventId.saison_date ? (
                <div className="event__stats__container">
                  <span className="event__stats__tag">Date des saisons</span>
                  <span className="event__stats__name">{eventId.saison_date}</span>
                </div>
              ) : ''}
              <div className="event__stats__container">
                <span className="event__stats__tag">Type de event</span>
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
                <span className="event__stats__tag">Dénivelé positif</span>
                <span className="event__stats__name">{eventId.d_positif || '-'}</span>
              </div>
              <div className="event__stats__container">
                <span className="event__stats__tag">Dénivelé négatif</span>
                <span className="event__stats__name">{eventId.d_negatif || '-'}</span>
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
                <span className="event__stats__name">{eventId.openingHours}-{eventId.closed_hours}</span>
              </div>
              <div className="event__stats__container">
                <span className="event__stats__tag">Nombre d'utilisateurs</span>
                <span className="event__stats__name">{eventId.numbers_users}</span>
              </div>
              <div className="event__stats__container">
                <span className="event__stats__tag">Note Moyenne</span>
                <span className="event__stats__name">{eventId.average_rating}</span>
              </div>
            </div>
            <div className="event__map">
              <BasicMap
                zoom={13}
                coordinates={[eventId.latitude, eventId.longitude]}
                popupTitle={`${eventId.title}, ${eventId.address}`}
              />
            </div>
            <div className="event__soon">
              <p>Bientot...</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Event.propTypes = {

// };

export default Event;
