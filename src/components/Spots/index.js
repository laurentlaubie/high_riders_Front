// == Import composants
import Card from 'src/components/Card';
// import data from 'src/data';
import BasicMap from 'src/components/BasicMap';

// == Import persos
import './style.scss';
import { useSelector } from 'react-redux';

const spotList = () => {
  const spotDataList = useSelector((state) => state.spots.spotsList);
  return (
    <div className="spotList">
      <h1 className="spotList__title">Liste des spots</h1>
      <div className="spotList__filter">
        <select className="spotList__filter__selector">
          <option className="spotList__filter__selector--county">Département</option>
        </select>
        <select className="spotList__filter__selector">
          <option className="spotList__filter__selector--category">Disciplines</option>
        </select>
        <input className="spotList__filter--search" type="search" placeholder="Recherche de spots ..." />
      </div>
      <div className="spotList__map">
        <BasicMap />
      </div>
      <div className="spotList__cards">
        <div className="spotList__list">
          <h1>Tous les spots disponibles en France</h1>
          <div className="spotList__list__elem">
            {spotDataList.map((item) => (
              <Card key={item.id} {...item} typeCard="spots" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default spotList;
