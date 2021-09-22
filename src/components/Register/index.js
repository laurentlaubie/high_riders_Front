import './style.scss';
import avatar from './avatar.png';

const Register = () => (
  <div className="register">
    <h1 className="register__title">Créer votre profil</h1>
    <img className="register__avatar" src={avatar} alt="avatar" />
    <input className="register__form" placeholder="nom ..." />
    <input className="register__form" placeholder="prenom ..." />
    <input className="register__form" placeholder="pseudo ..." />
    <input className="register__form" placeholder="email ..." />
    <input className="register__form" placeholder="mot de passe ..." />
    <input className="register__form" placeholder="description ..." />
    <input className="register__form" placeholder="ville ..." />
    <input className="register__form" placeholder="équipement ..." />
    <select className="register__selector">
      <option>discipline</option>
      <option>b</option>
      <option>c</option>
    </select>
    <button className="register__button" type="submit">Envoyer</button>
  </div>
);

export default Register;
