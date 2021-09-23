// == Import composants
import Card from 'src/components/Card';
import data from 'src/data';
import map from './map.jpg';

// == Import persos
import './style.scss';

const spotList = () => (
  <div className="spotList">
    <h1 className="spotList__title">Liste des spots</h1>
    <div className="spotList__filter">
      <select className="spotList__filter__selector">
        <option className="spotList__filter__selector--county">Département</option>
      </select>
      <select className="spotList__filter__selector">
        <option className="spotList__filter__selector--category">Disciplines</option>
      </select>
      <input className="spotList__filter--search" type="search" placeholder="Recherche de spots ..."/>
    </div>
    <div className="spotList__image">
      <img src={map} alt="map" className="spotList__image--img" />
    </div>
    <div className="spotList__cards">  
      <div className="spotList__list">
        <h1>Meilleurs spots</h1>
        <div className="spotList__list__elem">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="spotList__list">
        <h1>Derniers spots ajoutés</h1>
        <div className="spotList__list__elem">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="spotList__list">
        <h1>Derniers évènements</h1>
        <div className="spotList__list__elem">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default spotList;
