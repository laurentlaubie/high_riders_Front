import { combineReducers } from 'redux';

import homeReducer from './home';
import spotsReducer from './spots';

const rootReducer = combineReducers({
  home: homeReducer,
  spots: spotsReducer,
});

export default rootReducer;
