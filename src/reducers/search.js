import { CHANGE_USER_SEARCH } from 'src/actions/search';

export const initialState = {
  userSearch: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_SEARCH:
      return {
        ...state,
        userSearch: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
