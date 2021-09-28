// == Import composants
import Card from 'src/components/Card';
import { useSelector } from 'react-redux';

// == Import persos
import './style.scss';

const Result = () => {
  const lastsSpots = useSelector((state) => state.home.lastsSpots);
  const lastsEvents = useSelector((state) => state.home.lastsEvents);
  return (
    <div className="result">
      <h1 className="result__title">Résultats de votre recherche:</h1>
      <div className="result__cards">
        <div className="result__list">
          <h1 className="result__title">Listes des spots</h1>
          <div className="homepage__list__elem">
            {lastsSpots.map((item) => (
              <Card key={item.id} {...item} typeCard="spots" />
            ))}
          </div>
          <h1 className="result__title">Listes des évenements</h1>
          <div className="homepage__list__elem">
            {lastsEvents.map((item) => (
              <Card key={item.id} {...item} typeCard="spots" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Result;
