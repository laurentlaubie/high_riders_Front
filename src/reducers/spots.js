export const initialState = {
  spotsList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_SPOTS_LIST':
      return {
        ...state,
        spotsList: action.spotsList,
      };
    default:
      return state;
  }
};

export default reducer;
