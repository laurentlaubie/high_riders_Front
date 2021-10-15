import { combineReducers } from 'redux';

import homeReducer from './home';
import spotsReducer from './spots';
import eventsReducer from './events';
import searchReducer from './search';
import userReducer from './user';
import contactReducer from './contact';

const rootReducer = combineReducers({
  home: homeReducer,
  spots: spotsReducer,
  events: eventsReducer,
  search: searchReducer,
  user: userReducer,
  contact: contactReducer,
});

export default rootReducer;
