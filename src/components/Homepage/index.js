// == Import composants
import Card from 'src/components/Card';

// == Import persos
import background from 'src/assets/images/background.jpg';
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
      <Card fondCard="https://images.pexels.com/photos/1619299/pexels-photo-1619299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </div>
  </div>
);

export default Homepage;
