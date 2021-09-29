export const initialState = {
  loading: true,
  spotId: {},
  spotsList: [],
  spotsCate: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_SPOTS_LIST':
      return {
        ...state,
        spotsList: action.spotsList,
        spotsCate: action.spotsCate,
      };
    case 'SAVE_SPOT_ID':
      return {
        ...state,
        spotId: action.newSpot,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
