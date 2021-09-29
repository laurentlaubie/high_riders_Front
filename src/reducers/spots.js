export const initialState = {
  loading: true,
  spotId: {},
  spotsList: [],
  spotsCate: [],
  spotsDeparts: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_SPOTS_LIST':
      return {
        ...state,
        spotsList: action.spotsList,
        spotsCate: action.spotsCate,
        spotsDeparts: action.spotsDepar,
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
