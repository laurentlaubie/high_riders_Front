// == Import persos
import background from 'src/assets/images/background.jpg';
import fondCard from 'src/assets/images/fondCard.jpg';
import './style.scss';

const Homepage = () => (
  <div>
    <img src={background} alt="Illustration" className="home__background" />
    <div>
      <h2>Bienvenue sur High Riders</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at lacus sit amet
        felis rutrum sodales sed eget est. Praesent consequat, eros in blandit pulvinar,
        lorem magna tincidunt augue, at volutpat tortor ligula ac augue.
      </p>
    </div>
    <div>
      <h1>Derniers évènements</h1>
      <div className="card">
        <img src={fondCard} alt="Event 1" className="card__img" />
        <span>Nom de la ville</span>
        <span>15 Oct. 2021</span>
        <h2>Nom de l'evenement</h2>
        <h3>Disciplines pratiquées : </h3>
        <span>VTT</span>
        <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam at lacus sit amet felis...</p>
      </div>
    </div>
  </div>
);

export default Homepage;
