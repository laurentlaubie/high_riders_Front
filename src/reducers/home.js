const initialState = {
  loading: true,
  lastsEvents: [],
  bestsSpots: [],
  lastsSpots: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_HOME_LASTS':
      return {
        ...state,
        lastsEvents: action.lastsEvents,
        bestsSpots: action.bestsSpots,
        lastsSpots: action.lastsSpots,
      };
    default:
      return state;
  }
};

export default reducer;
