import { useDispatch, useSelector } from 'react-redux';
import Field from 'src/components/Field';
import './style.scss';

const ContactUs = () => {
  const dispatch = useDispatch();
  const newNameContact = useSelector((state) => state.contact.newNameContact);
  const newFirstnameContact = useSelector((state) => state.contact.newFirstnameContact);
  const newEmailContact = useSelector((state) => state.contact.newEmailContact);
  const newMessageContact = useSelector((state) => state.contact.newMessageContact);

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_VALUE_CONTACT',
      value: value,
      key: key,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'CONTACT_US',
    });
  };

  return (
    <form className="contact" onSubmit={handleSubmit}>
      <Field
        name="newNameContact"
        placeholder="Nom"
        onChange={changeField}
        value={newNameContact}
      />
      <Field
        name="newFirstnameContact"
        placeholder="Prénom"
        onChange={changeField}
        value={newFirstnameContact}
      />
      <Field
        name="newEmailContact"
        placeholder="Email"
        onChange={changeField}
        value={newEmailContact}
      />
      <Field
        name="newMessageContact"
        placeholder="message"
        onChange={changeField}
        value={newMessageContact}
      />
      <button className="contact__button" type="submit"><p className="contact__send">Envoyer</p></button>
    </form>
  );
};

// ContactUs.propTypes = {

// };

export default ContactUs;
