export const initialState = {
  userSearch: '',
  spotsResultList: [],
  eventsResultList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_ALL_VALUE':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'SAVE_RESULT_DATA':
      return {
        ...state,
        spotsResultList: action.spotsResultList,
        eventsResultList: action.eventsResultList,
      };
    default:
      return state;
  }
};

export default reducer;
