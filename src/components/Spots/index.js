// == Import composants
import Card from 'src/components/Card';
import Select from 'src/components/Select';
import BasicMap from 'src/components/BasicMap';

// == Import persos
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
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
  const loading = useSelector((state) => state.spots.loading);

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
    localStorage.removeItem('successSearch');
    localStorage.setItem('successSearch', 'true');
    let finalResult = [];
    const departFiltered = findFiltredDepartementSpots(spotDataList, departValue);
    const categsFiltered = findFilteredCategoriesSpots(departFiltered, spotDisci);
    finalResult = departFiltered.concat(categsFiltered);
    dispatch({
      type: 'SAVE_RESULT_LIST',
      newList: finalResult,
    });
    const successSearch = localStorage.getItem('successSearch');

    if (successSearch === 'true') {
      if (finalResult.length > 0) {
        toast.success('Recherche effectué', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
      else {
        toast.info('Pas de résultats', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
    }
  };

  const isAddedSpot = localStorage.getItem('addedSpot');

  if (isAddedSpot === 'true') {
    toast.success('Spot ajouté', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  }

  localStorage.removeItem('addedSpot');

  if (loading) {
    return 'chargement ...';
  }

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
          brutData="Selectionner un département"
        />
        <Select
          value={spotDisci}
          name="spotDisci"
          data={spotsCate}
          placeholder="Disciplines"
          onChange={changeField}
          brutData="Selectionner une discipline"
        />
        <button className="spotList__button__filter" type="submit">Filtrer</button>
      </form>
      <div className="spotList__map">
        {newResultList.length > 0
          ? <BasicMap data={newResultList} typePopup="spots" />
          : <BasicMap data={spotDataList} typePopup="spots" />}
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
