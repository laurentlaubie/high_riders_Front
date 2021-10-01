// import PropTypes from 'prop-types';

import './style.scss';

const ContactUs = () => (
  <form>
    <label htmlFor="name">Nom
      <input id="name" type="text" placeholder="Nom" />
    </label>
    <label htmlFor="prenom">Prénom
      <input id="prenom" type="text" placeholder="Prénom" />
    </label>
    <label htmlFor="email">Email
      <input id="email" type="email" placeholder="Email" />
    </label>
    <label htmlFor="message">Message
      <input id="message" type="text" placeholder="Message" />
    </label>
  </form>
);

// ContactUs.propTypes = {

// };

export default ContactUs;
