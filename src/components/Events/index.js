// == Import composants
import Card from 'src/components/Card';
import data from 'src/data';
import BasicMap from 'src/components/BasicMap';

const Events = () => (
  <div className="eventList">
    <h1 className="eventList__title">Liste des evènements</h1>
    <div className="eventList__filter">
      <select className="eventList__filter__selector">
        <option className="eventList__filter__selector--county">Département</option>
      </select>
      <select className="eventList__filter__selector">
        <option className="eventList__filter__selector--category">Disciplines</option>
      </select>
      <input className="eventList__filter--search" type="search" placeholder="Recherche d'evènements ..." />
    </div>
    <div className="eventList__image">
      <BasicMap />
    </div>
    <div className="eventList__cards">
      <div className="eventList__list">
        {/* <h1>Evènements</h1> */}
        <div className="eventList__list__elem">
          {data.map((item) => (
            <Card key={item.id} {...item} typeCard="events" />
          ))}
          {data.map((item) => (
            <Card key={item.id} {...item} typeCard="events" />
          ))}
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
          {data.map((item) => (
            <Card key={item.id} {...item} typeCard="events" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Events;
