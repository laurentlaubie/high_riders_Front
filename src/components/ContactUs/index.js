// import PropTypes from 'prop-types';

import './style.scss';

const ContactUs = () => (
  <form className="contact-us">
    <div>
      <label htmlFor="name">Nom
        <input id="name" type="text" placeholder="Nom" />
      </label>
    </div>
    <div>
      <label htmlFor="prenom">Prénom
        <input id="prenom" type="text" placeholder="Prénom" />
      </label>
    </div>
    <div>
      <label htmlFor="email">Email
        <input id="email" type="email" placeholder="Email"/>
      </label>
    </div>
    <div>
      <label htmlFor="message">Message
        <input id="message" type="text" placeholder="Message" />
      </label>
    </div>
    <button type="submit">Envoyer</button>
  </form>
);

// ContactUs.propTypes = {

// };

export default ContactUs;
