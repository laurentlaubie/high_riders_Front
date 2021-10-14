// == Import composants
import Card from 'src/components/Card';
import Select from 'src/components/Select';
import BasicMap from 'src/components/BasicMap';

// == Import persos
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { findFilteredCategoriesSpots, findFiltredDepartementSpots } from '../../selectors/spots';

const Events = () => {
  const dispatch = useDispatch();
  const eventsList = useSelector((state) => state.events.eventsList);
  const eventsDepar = useSelector((state) => state.events.eventsDepar);
  const eventsCateg = useSelector((state) => state.events.eventsCate);
  const logged = useSelector((state) => state.user.logged);
  const departValue = useSelector((state) => state.events.departValue);
  const spotDisci = useSelector((state) => state.events.spotDisci);
  const newResultList = useSelector((state) => state.events.newResultList);

  useEffect(() => {
    dispatch({
      type: 'FETCH_EVENTS_DATA',
    });
  }, []);

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_EVENT_VALUE',
      value: value,
      key: key,
    });
  };

  const handleSearchEvents = (evt) => {
    evt.preventDefault();
    const departFiltered = findFiltredDepartementSpots(eventsList, departValue);
    const finalResult = findFilteredCategoriesSpots(departFiltered, spotDisci);
    dispatch({
      type: 'SAVE_EVENT_RESULT_LIST',
      newList: finalResult,
    });
  };

  return (
    <div className="eventList">
      <Link className="eventList__add" to={logged ? '/ajout-evenement' : '/connexion'}>Ajouter un évènement</Link>
      <h1 className="eventList__title">Liste des evènements</h1>
      <form className="eventList__filter" onSubmit={handleSearchEvents}>
        <Select
          value={departValue}
          name="departValue"
          data={eventsDepar}
          placeholder="Département"
          onChange={changeField}
        />
        <Select
          value={spotDisci}
          name="spotDisci"
          data={eventsCateg}
          placeholder="Disciplines"
          onChange={changeField}
        />
        <button type="submit">Filtrer</button>
      </form>
      <div className="eventList__map">
        <BasicMap data={eventsList} />
      </div>
      {newResultList.length > 0
        ? (
          <div className="spotList__cards">
            <div className="spotList__list">
              <h1>Résultat de la recherche</h1>
              <div className="spotList__list__elem">
                {newResultList.map((item) => (
                  <Card key={item.id} {...item} typeCard="spots" />
                ))}
              </div>
            </div>
          </div>
        ) : (
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
        )}

    </div>
  );
};

export default Events;
