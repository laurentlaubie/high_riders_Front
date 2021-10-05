import axios from 'axios';
// import jwtDecode from 'jwt-decode';
import { FETCH_HOME_LASTS } from '../actions/home';
import { FETCH_SPOTS_LIST, FETCH_SPOT_ID } from '../actions/spots';

const api = axios.create({
  baseURL: 'http://ec2-34-224-30-121.compute-1.amazonaws.com/api/v1',
  // baseURL: 'http://localhost:8000/api/v1',
});

const connectedToken = localStorage.getItem('token');

// Si on a bien un token
if (connectedToken) {
  api.defaults.headers.common.Authorization = `bearer ${connectedToken}`;
}

const ajax = (store) => (next) => (action) => {
  if (action.type === FETCH_HOME_LASTS) {
    api.get('/home')
      .then((res) => {
        // success
        store.dispatch({
          type: 'SAVE_HOME_LASTS',
          lastsEvents: res.data[1],
          bestsSpots: res.data[2],
          lastsSpots: res.data[0],
        });
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  if (action.type === FETCH_SPOTS_LIST) {
    api.get('/spots/')
      .then((res) => {
        // success
        store.dispatch({
          type: 'SAVE_SPOTS_LIST',
          spotsList: res.data[0],
          spotsCate: res.data[1],
          spotsDepar: res.data[2],
        });
        // console.log(res.data);
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  if (action.type === 'SEND_NEW_SPOT') {
    const state = store.getState();
    api.post('/spots/', {
      title: state.spots.newTitle,
      image: state.spots.newImage,
      description: state.spots.newDescription,
      address: state.spots.newAddress,
      city: state.spots.newCity,
      openingHours: state.spots.newOpeningHours,
      type_spot: state.spots.newTypeSpot,
      categories: [state.spots.newCategory],
      departement: state.spots.newDepartement,
    })
      .then((res) => {
        // success
        // store.dispatch({
        //   type: 'SAVE_SPOTS_LIST',
        // });
        console.log(res);
        window.location.href = '/spots';
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  if (action.type === FETCH_SPOT_ID) {
    api.get(`/spots/${action.id}`)
      .then((res) => {
        // success
        store.dispatch({
          type: 'SAVE_SPOT_ID',
          newSpot: res.data,
        });
        // console.log(res.data);
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  if (action.type === 'LOGIN') {
    // const state = store.getState();
    api.post('/login_check', {
      // username: state.user.email,
      // password: state.user.password,
      username: 'front@oclock.io',
      password: 'demotest',
    })
      .then((res) => {
        // success
        window.location.href = '/';
        api.defaults.headers.common.Authorization = `bearer ${res.data.token}`;
        // on va chercher les données de l'utilisateur connecté
        store.dispatch({
          type: 'SAVE_USER',
          pseudo: res.data.data.user_pseudo,
          userId: res.data.data.user_id,
          token: res.data.token,
        });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('pseudo', res.data.data.user_pseudo);
        localStorage.setItem('userid', res.data.data.user_id);
        // on décode le token pour aller chercher son id
        // const decodedToken = jwtDecode(res.data.token);
        console.log(res.data.data);
      })
      .catch((err) => {
        // error
        const errStatus = err.response.status;
        console.log(errStatus);
        alert('Echec d\'authentification');
        if (errStatus === 403) {
          window.location.href = '/403';
        }
        if (errStatus === 404) {
          window.location.href = '/404';
        }
      });
  }
  if (action.type === 'FETCH_EVENTS_DATA') {
    api.get('/events/')
      .then((res) => {
        // success
        store.dispatch({
          type: 'SAVE_EVENTS_LIST',
          eventsList: res.data[0],
          eventsCate: res.data[1],
          eventsDepar: res.data[2],
        });
        // console.log(res.data);
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  if (action.type === 'SEND_NEW_EVENT') {
    const state = store.getState();
    api.post('/events/', {
      title: state.events.newTitle,
      image: state.events.newImage,
      description: state.events.newDescription,
      opening_hours: state.events.newOpeningHour,
      closed_hours: state.events.newClosingHour,
      type_event: state.events.newTypeEvent,
      categories: [state.events.newCategory],
      departement: state.events.newDepartement,
      difficulty: state.events.newDifficulty,
      link: state.events.newLink,
      price: state.events.newPrice,
      accessibility: state.events.newAccessibility,
      date_event: state.events.newDateEvent,
    })
      .then((res) => {
        // success
        // store.dispatch({
        //   type: 'SAVE_SPOTS_LIST',
        // });
        console.log(res);
        window.location.href = '/evenements';
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  if (action.type === 'FETCH_EVENT_ID') {
    api.get(`/events/${action.id}`)
      .then((res) => {
        // success
        store.dispatch({
          type: 'SAVE_EVENT_ID',
          newEvent: res.data,
        });
        // console.log(res.data);
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  next(action);
};

export default ajax;
