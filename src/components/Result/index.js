// == Import composants
import Card from 'src/components/Card';
import { useSelector } from 'react-redux';

// == Import persos
import './style.scss';

const Result = () => {
  const spotsResultList = useSelector((state) => state.search.spotsResultList);
  const eventsResultList = useSelector((state) => state.search.eventsResultList);
  return (
    <div className="result">
      <h1 className="result__title">Résultats de votre recherche :</h1>
      <div className="result__cards">
        <div className="result__list">
          <h1 className="result__title">Liste des spots</h1>
          <div className="result__list__elem">
            {spotsResultList.length > 0
              ? spotsResultList.map((item) => (
                <Card key={item.id} {...item} typeCard="spots" />
              ))
              : <p className="result__noresult">Aucun résultat</p>}
          </div>
          <h1 className="result__title">Liste des évenements</h1>
          <div className="result__list__elem">
            {eventsResultList.length > 0
              ? eventsResultList.map((item) => (
                <Card key={item.id} {...item} typeCard="spots" />
              ))
              : <p className="result__noresult">Aucun résultat</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
