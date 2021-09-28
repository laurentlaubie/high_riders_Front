// == Import composants
import Card from 'src/components/Card';
import data from 'src/data';

// == Import persos
import './style.scss';

const Result = () => (
  <div className="result">
    <h1 className="result__title">Résultats de votre recherche:</h1>
    <div className="result__cards">
      <div className="result__list">
        <h1>Listes des spots</h1>
        <div className="result__list__elem">
          {data.map((item) => (
            <Card key={item.id} {...item} typeCard="spots" />
          ))}
          {data.map((item) => (
            <Card key={item.id} {...item} typeCard="spots" />
          ))}
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
          {data.map((item) => (
            <Card key={item.id} {...item} typeCard="spots" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Result;
