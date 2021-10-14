// == Import composants
import Card from 'src/components/Card';
import Select from 'src/components/Select';
import BasicMap from 'src/components/BasicMap';

// == Import persos
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchSpotsList } from '../../actions/spots';
import { findFilteredCategoriesSpots, findFiltredDepartementSpots } from '../../selectors/spots';

const spotList = () => {
  const dispatch = useDispatch();
  const spotDataList = useSelector((state) => state.spots.spotsList);
  const spotsCate = useSelector((state) => state.spots.spotsCate);
  const spotsDeparts = useSelector((state) => state.spots.spotsDeparts);
  const logged = useSelector((state) => state.user.logged);
  const departValue = useSelector((state) => state.spots.departValue);
  const spotDisci = useSelector((state) => state.spots.spotDisci);
  const newResultList = useSelector((state) => state.spots.newResultList);

  useEffect(() => {
    dispatch(fetchSpotsList());
  }, []);

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_SPOT_VALUE',
      value: value,
      key: key,
    });
  };

  const handleSearchSpots = (evt) => {
    evt.preventDefault();
    const departFiltered = findFiltredDepartementSpots(spotDataList, departValue);
    const categFiltered = findFilteredCategoriesSpots(departFiltered, spotDisci);
    dispatch({
      type: 'SAVE_RESULT_LIST',
      newList: categFiltered,
    });
  };

  return (
    <div className="spotList">
      <Link className="spotList__add" to={logged ? '/ajout-spot' : '/connexion'}>Ajouter un spot</Link>
      <h1 className="spotList__title">Liste des spots</h1>
      <form className="spotList__filter" onSubmit={handleSearchSpots}>
        <Select
          value={departValue}
          name="departValue"
          data={spotsDeparts}
          placeholder="Département"
          onChange={changeField}
        />
        <Select
          value={spotDisci}
          name="spotDisci"
          data={spotsCate}
          placeholder="Disciplines"
          onChange={changeField}
        />
        <button type="submit">Filtrer</button>
      </form>
      <div className="spotList__map">
        <BasicMap data={spotDataList} />
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
        )
        : (
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
        )}
    </div>
  );
};

export default spotList;
