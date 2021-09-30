const initialState = {
  logged: false,
  email: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'SAVE_USER':
      return {
        ...state,
        logged: true,
        email: '',
        password: '',
      };
    default:
      return state;
  }
};

export default reducer;
