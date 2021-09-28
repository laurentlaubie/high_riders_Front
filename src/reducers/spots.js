export const initialState = {
  spotId: {},
  spotsList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_SPOTS_LIST':
      return {
        ...state,
        spotsList: action.spotsList,
      };
    case 'SAVE_SPOT_ID':
      return {
        ...state,
        spotId: action.currentSpot,
      };
    case 'CLEAR_SPOT_ID':
      return {
        ...state,
        spotId: {},
      };
    default:
      return state;
  }
};

export default reducer;
