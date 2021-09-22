import './style.scss';
import avatar from './avatar.png';
import editIcon from './editIcon.svg';

const Register = () => (
  <div className="register">
    <h1 className="register__title">Votre profil</h1>
    <img className="register__avatar" src={avatar} alt="avatar" />
    <div className="register__form">
      <input className="register__form--input" placeholder="nom ..." />
      <img className="register__form--image" src={editIcon} alt="edit" />
    </div>
    <div className="register__form">
      <input className="register__form--input" placeholder="prenom ..." />
      <img className="register__form--image" src={editIcon} alt="edit" />
    </div>
    <div className="register__form">
      <input className="register__form--input" placeholder="pseudo ..." />
      <img className="register__form--image" src={editIcon} alt="edit" />
    </div>
    <div className="register__form">
      <input className="register__form--input" placeholder="email ..." />
      <img className="register__form--image" src={editIcon} alt="edit" />
    </div>
    <div className="register__form">
      <input className="register__form--input" placeholder="password ..." />
      <img className="register__form--image" src={editIcon} alt="edit" />
    </div>
    <div className="register__form">
      <input className="register__form--input" placeholder="description ..." />
      <img className="register__form--image" src={editIcon} alt="edit" />
    </div>
    <div className="register__form">
      <input className="register__form--input" placeholder="ville ..." />
      <img className="register__form--image" src={editIcon} alt="edit" />
    </div>
    <div className="register__form">
      <input className="register__form--input" placeholder="équipement ..." />
      <img className="register__form--image" src={editIcon} alt="edit" />
    </div>
    <select className="register__selector">
      <option>discipline</option>
      <option>b</option>
      <option>c</option>
    </select>
    <button className="register__button" type="submit">Envoyer</button>
  </div>
);

export default Register;
