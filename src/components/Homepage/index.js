// == Import composants
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Card from 'src/components/Card';
import { fetchHomeLasts } from '../../actions/home';

// == Import persos
import './style.scss';

const Homepage = () => {
  const dispatch = useDispatch();
  const lastsEventsData = useSelector((state) => state.home.lastsEvents);
  const bestsSpotsData = useSelector((state) => state.home.bestsSpots);
  const lastsSpotsData = useSelector((state) => state.home.lastsSpots);
  const loading = useSelector((state) => state.home.loading);

  const lastsEvents = lastsEventsData.slice(0, 3);
  const bestsSpots = bestsSpotsData.slice(0, 3);
  const lastsSpots = lastsSpotsData.slice(0, 3);

  const isConnected = localStorage.getItem('isConnectedSuccess');

  useEffect(() => {
    dispatch(fetchHomeLasts());
  }, []);

  if (isConnected === 'true') {
    toast.success('Connexion réussi', {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  }

  localStorage.removeItem('isConnectedSuccess');

  if (loading) {
    return 'chargement ...';
  }

  return (
    <div className="homepage">
      <div className="homepage__welcome-container">
        <img
          src="https://images.pexels.com/photos/2270328/pexels-photo-2270328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Illustration"
          className="homepage__background"
        />
        <div className="homepage__welcome">
          <h2>Bienvenue sur High Riders</h2>
          <div className="homepage__welcome__description">
            <p>Tu veux créer un événement pour retrouver tes collègues et taper des tricks
              sur ton spot ?
            </p>
            <p>Tu veux découvrir un nouveau spot ?</p>
            <p>Tu veux rencontrer de nouveaux riders ?</p>
            <p>Retrouve les meilleurs spots de Vtt 🚴 de ta région sur O’Riders, un site
              communautaire fait PAR et POUR les Riders de France.
            </p>
            <p>Crée ton spot préféré, note et commente ton événement.</p>
            <p>Parcours une liste des meilleurs spots, ou mieux encore, filtres en fonction
              de tes critères.
            </p>
            <p>Dépêche-toi, connecte-toi au plus vite et part à l'aventure.</p>
          </div>
        </div>
      </div>
      <div className="homepage__cards">
        <div className="homepage__list">
          <h1>Derniers évènements</h1>
          <div className="homepage__list__elem">
            {lastsEvents.map((item) => (
              <Card key={item.id} {...item} typeCard="evenements" />
            ))}
          </div>
        </div>
        <div className="homepage__list">
          <h1>Meilleurs spots</h1>
          <div className="homepage__list__elem">
            {bestsSpots.map((item) => (
              <Card key={item.id} {...item} typeCard="spots" />
            ))}
          </div>
        </div>
        <div className="homepage__list">
          <h1>Derniers spots ajoutés</h1>
          <div className="homepage__list__elem">
            {lastsSpots.map((item) => (
              <Card key={item.id} {...item} typeCard="spots" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
