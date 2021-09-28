export const initialState = {
  loading: true,
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
        spotId: action.newSpot,
        loading: false,
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
