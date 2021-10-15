import axios from 'axios';
import { toast } from 'react-toastify';
import { FETCH_HOME_LASTS } from '../actions/home';
import { FETCH_SPOTS_LIST, FETCH_SPOT_ID } from '../actions/spots';
import { FETCH_PROFILE, UPDATE_PROFILE } from '../actions/profile';
import { CONTACT_US } from '../actions/contact';

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
  if (action.type === 'FETCH_SEARCH_ALL') {
    api.get(`/search/?search=${action.searchedValue}`)
      .then((res) => {
        // success
        store.dispatch({
          type: 'SAVE_RESULT_DATA',
          spotsResultList: res.data[0],
          eventsResultList: res.data[1],
        });
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
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
    api.post('/spots/add', {
      title: state.spots.newTitle,
      image: state.spots.newImage,
      description: state.spots.newDescription,
      address: state.spots.newAddress,
      city: state.spots.newCity,
      type_spot: state.spots.newTypeSpot,
      categories: [state.spots.newCategory],
      departement: state.spots.newDepartement,
      latitude: state.spots.newLatitude,
      longitude: state.spots.newLongitude,
    })
      .then((res) => {
        // success
        localStorage.setItem('addedSpot', 'true');
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
    const state = store.getState();
    api.post('/login_check', {
      username: state.user.email,
      password: state.user.password,
      // username: 'laurent@oclock.io',
      // password: 'demotest',
    })
      .then((res) => {
        // success
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
        localStorage.setItem('isConnectedSuccess', 'true');
        window.location.href = '/';
        // console.log(res.data.data);
      })
      .catch(() => {
        // error
        toast.error('Echec d\'authentification', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
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
    api.post('/events/add', {
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
      latitude: state.events.newLatitude,
      longitude: state.events.newLongitude,
    })
      .then((res) => {
        // success
        localStorage.setItem('addedEvent', 'true');
        console.log(res);
        window.location.href = '/evenements';
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  if (action.type === 'ADD_PROFILE') {
    const state = store.getState();
    api.post('/users/add', {
      email: state.user.newEmailRegister,
      pseudo: state.user.newPseudoRegister,
      password: state.user.newPasswordRegister,
      avatar: state.user.newImageRegister,
      firstname: state.user.newPrenomRegister,
      lastname: state.user.newNameRegister,
      presentation: state.user.newDescriptionRegister,
      city: state.user.newCityRegister,
      departement: state.user.newDepartementRegister,
      categories: [state.user.newDisciRegister],
      equipement: state.user.newEquipementRegister,
    })
      .then((res) => {
        // success
        toast.success('Inscription réussi', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        window.location.href = '/connexion';
        console.log(res);
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
  if (action.type === 'ADD_LIKE_SPOT') {
    api.patch(`/spots/${action.id}/like`, {})
      .then(() => {
        // success
        store.dispatch({
          type: 'TOGGLE_LIKE_SPOT',
          liked: action.isLiked,
          nbLikesStorage: action.calcLikes,
        });
        // store.dispatch({
        //   type: 'LIKE_STORAGE_SPOT',
        //   nbLikesStorage: action.calcLikes,
        // });
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  if (action.type === 'ADD_DISLIKE_SPOT') {
    api.patch(`/spots/${action.id}/dislike`, {})
      .then(() => {
        // success
        store.dispatch({
          type: 'TOGGLE_LIKE_SPOT',
          liked: action.isLiked,
          nbLikesStorage: action.calcLikes,
        });
        // store.dispatch({
        //   type: 'DISLIKE_STORAGE_SPOT',
        //   nbLikesStorage: action.calcLikes,
        // });
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  if (action.type === FETCH_PROFILE) {
    api.get(`/users/${action.id}`)
      .then((res) => {
        // success
        store.dispatch({
          type: 'GET_PROFILE',
          newProfile: res.data,
        });
        console.log(res.data);
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  if (action.type === 'SEND_SPOT_COMMENT') {
    const state = store.getState();
    api.post(`/spots/${action.id}/comment`, {
      content: state.spots.newComment,
      label_type: '',
    })
      .then((res) => {
        // success
        store.dispatch({
          type: 'SUCCESS_COMMENT_SPOT',
        });
        console.log(res);
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  if (action.type === 'SEND_EVENT_COMMENT') {
    const state = store.getState();
    api.post(`/events/${action.id}/comment`, {
      content: state.events.newComment,
      label_type: '',
    })
      .then((res) => {
        // success
        store.dispatch({
          type: 'SUCCESS_COMMENT_EVENT',
        });
        console.log(res);
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  if (action.type === 'SEND_EVENT_PARTICIPATION') {
    api.post(`/events/${action.id}/participation`, {})
      .then((res) => {
        // success
        // store.dispatch({
        //   type: 'SUCCESS_COMMENT_EVENT',
        // });
        console.log(res);
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  if (action.type === UPDATE_PROFILE) {
    const state = store.getState();
    api.put(`/users/${action.id}`, {
      email: state.user.profileEmail,
      pseudo: state.user.profilePseudo,
      avatar: state.user.profileAvatar,
      firstname: state.user.profileFirstname,
      lastname: state.user.profileLastname,
      presentation: state.user.profilePresentation,
      city: state.user.profileCity,
      departement: state.user.profileDepartement,
      equipement: state.user.profileEquipement,
    })
      .then((res) => {
        // success
        store.dispatch({
          type: 'UPDATE',
        });
        window.location.href = '/profil';
        console.log(res);
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  if (action.type === 'DELETE_PROFILE') {
    api.delete(`/users/${action.id}`)
      .then((res) => {
        // success
        store.dispatch({
          type: 'LOGOUT',
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (action.type === 'DELETE_SPOT') {
    api.delete(`/spots/${action.id}`, {})
      .then((res) => {
        // success
        // store.dispatch({
        // });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (action.type === 'DELETE_EVENT') {
    api.delete(`/events/${action.id}`, {})
      .then((res) => {
        // success
        // store.dispatch({
        // });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (action.type === CONTACT_US) {
    const state = store.getState();
    api.post('/contactus/', {
      firstname: state.contact.newFirstnameContact,
      lastname: state.contact.newNameContact,
      email: state.contact.newEmailContact,
      content: state.contact.newMessageContact,
    })
      .then((res) => {
        // success
        store.dispatch({
          type: 'CONCTACT_US_POST',
        });
        console.log(res);
      })
      .catch((err) => {
        // error
        console.log(err);
      });
  }
  next(action);
};

export default ajax;
