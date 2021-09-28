import { combineReducers } from 'redux';

import homeReducer from './home';
import spotsReducer from './spots';
import searchReducer from './search';

const rootReducer = combineReducers({
  home: homeReducer,
  spots: spotsReducer,
  search: searchReducer,
});

export default rootReducer;
