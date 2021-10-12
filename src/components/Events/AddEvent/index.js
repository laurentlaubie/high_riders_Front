import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventForm from './EventForm';
import './style.scss';

const AddEvent = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.events.newTitle);
  const image = useSelector((state) => state.events.newImage);
  const description = useSelector((state) => state.events.newDescription);
  const openingHour = useSelector((state) => state.events.newOpeningHour);
  const closingHour = useSelector((state) => state.events.newClosingHour);
  const typeEvent = useSelector((state) => state.events.newTypeEvent);
  const category = useSelector((state) => state.events.newCategory);
  const departement = useSelector((state) => state.events.newDepartement);
  const difficulty = useSelector((state) => state.events.newDifficulty);
  const link = useSelector((state) => state.events.newLink);
  const price = useSelector((state) => state.events.newPrice);
  const accessibility = useSelector((state) => state.events.newAccessibility);
  const dateEvent = useSelector((state) => state.events.newDateEvent);
  const latitude = useSelector((state) => state.events.newLatitude);
  const longitude = useSelector((state) => state.events.newLongitude);

  useEffect(() => {
    dispatch({
      type: 'FETCH_EVENTS_DATA',
    });
  }, []);

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_EVENT_VALUE',
      value: value,
      key: key,
    });
  };

  const changeFieldNumber = (value, key) => {
    const addNumber = Number(value);
    changeField(addNumber, key);
  };

  const sendData = () => {
    dispatch({
      type: 'SEND_NEW_EVENT',
    });
  };

  return (
    <div className="connection">
      <div className="connection-form">
        <h1>Ajouter un évènement</h1>
        <EventForm
          title={title}
          image={image}
          description={description}
          openingHour={openingHour}
          closingHour={closingHour}
          typeEvent={typeEvent}
          category={category}
          departement={departement}
          difficulty={difficulty}
          link={link}
          price={price}
          dateEvent={dateEvent}
          accessibility={accessibility}
          changeField={changeField}
          changeFieldNumber={changeFieldNumber}
          sendData={sendData}
          newLatitude={latitude}
          newLongitude={longitude}
        />
      </div>
    </div>
  );
};

// AddEvent.propTypes = {

// };

export default AddEvent;
