// == Import composants
import Card from 'src/components/Card';
// import data from 'src/data';
import BasicMap from 'src/components/BasicMap';

// == Import persos
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Events = () => {
  const dispatch = useDispatch();
  const eventsList = useSelector((state) => state.events.eventsList);
  const eventsDepar = useSelector((state) => state.events.eventsDepar);
  const eventsCateg = useSelector((state) => state.events.eventsCate);

  useEffect(() => {
    dispatch({
      type: 'FETCH_EVENTS_DATA',
    });
  }, []);

  return (
    <div className="eventList">
      <h1 className="eventList__title">Liste des evènements</h1>
      <div className="eventList__filter">
        <select className="eventList__filter__selector">
          <option className="eventList__filter__selector--county">Département</option>
          {eventsDepar.map((elem) => (
            <option key={elem.id} value={elem.title}>{elem.title}</option>
          ))}
        </select>
        <select className="eventList__filter__selector">
          <option className="eventList__filter__selector--category">Disciplines</option>
          {eventsCateg.map((elem) => (
            <option key={elem.id} value={elem.title}>{elem.title}</option>
          ))}
        </select>
        <input className="eventList__filter--search" type="search" placeholder="Recherche d'evènements ..." />
      </div>
      <div className="eventList__map">
        <BasicMap data={eventsList} />
      </div>
      <div className="eventList__cards">
        <div className="eventList__list">
          <h1>Tous les évènements disponibles en France</h1>
          <div className="eventList__list__elem">
            {eventsList.map((item) => (
              <Card key={item.id} {...item} typeCard="evenements" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
