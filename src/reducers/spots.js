export const initialState = {
  loading: true,
  spotId: {},
  spotsList: [],
  spotsCate: [],
  spotsDeparts: [],
  newComment: '',
  newTypeSpot: 'Bike Park',
  newCategory: '1',
  newDepartement: '1',
  departValue: '1',
  spotDisci: '1',
  newResultList: [],
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
    case 'CHANGE_SPOT_VALUE':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'SAVE_RESULT_LIST':
      return {
        ...state,
        newResultList: action.newList,
      };
    default:
      return state;
  }
};

export default reducer;
