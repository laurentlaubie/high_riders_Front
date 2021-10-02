// == Import composants
import Card from 'src/components/Card';
// import data from 'src/data';
import BasicMap from 'src/components/BasicMap';

// == Import persos
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchSpotsList } from '../../actions/spots';

const spotList = () => {
  const dispatch = useDispatch();
  const spotDataList = useSelector((state) => state.spots.spotsList);
  const spotsCate = useSelector((state) => state.spots.spotsCate);
  const spotsDeparts = useSelector((state) => state.spots.spotsDeparts);

  useEffect(() => {
    dispatch(fetchSpotsList());
  }, []);
  return (
    <div className="spotList">
      <Link className="spotList__add" to="/ajout-spot">Ajouter un spot</Link>
      <h1 className="spotList__title">Liste des spots</h1>
      <div className="spotList__filter">
        <select className="spotList__filter__selector">
          <option className="spotList__filter__selector--county">Département</option>
          {spotsDeparts.map((elem) => (
            <option key={elem.id} value={elem.title}>{elem.title}</option>
          ))}
        </select>
        <select className="spotList__filter__selector">
          <option className="spotList__filter__selector--category" value="">Disciplines</option>
          {spotsCate.map((elem) => <option key={elem.id} value={elem.title}>{elem.title}</option>)}
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
