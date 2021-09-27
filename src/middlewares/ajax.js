import axios from 'axios';
import { FETCH_HOME_LASTS } from '../actions/home';
import { FETCH_SPOTS_LIST } from '../actions/spots';

const api = axios.create({
  // baseURL: 'http://ec2-18-234-237-249.compute-1.amazonaws.com/api/v1',
  baseURL: 'http://localhost:8000/api/v1',
});

const ajax = (store) => (next) => (action) => {
  if (action.type === FETCH_HOME_LASTS) {
    api.get('/home')
      .then((res) => {
        // success
        store.dispatch({
          type: 'SAVE_HOME_LASTS',
          lastsEvents: res.data[0],
          bestsSpots: res.data[1],
          lastsSpots: res.data[2],
        });
      })
      .catch((err) => {
        // error
        console.log(err);
      })
      .finally(() => {
        // always executed
      });
  }
  if (action.type === FETCH_SPOTS_LIST) {
    api.get('/spots/')
      .then((res) => {
        // success
        store.dispatch({
          type: 'SAVE_SPOTS_LIST',
          spotsList: res.data,
        });
        // console.log(res.data);
      })
      .catch((err) => {
        // error
        console.log(err);
      })
      .finally(() => {
        // always executed
      });
  }
  next(action);
};

export default ajax;
