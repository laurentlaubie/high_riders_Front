import axios from 'axios';
import { FETCH_HOME_LASTS } from '../actions/home';

const api = axios.create({
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
  next(action);
};

export default ajax;
