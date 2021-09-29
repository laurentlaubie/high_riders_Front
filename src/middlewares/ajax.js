import axios from 'axios';
import { FETCH_HOME_LASTS } from '../actions/home';
import { FETCH_SPOTS_LIST, FETCH_SPOT_ID } from '../actions/spots';

const api = axios.create({
  baseURL: 'http://ec2-34-224-30-121.compute-1.amazonaws.com/api/v1',
  // baseURL: 'http://localhost:8000/api/v1',
});

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
        });
        console.log(res.data);
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
  next(action);
};

export default ajax;
