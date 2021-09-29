const initialState = {
  email: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_EMAIL_VALUE':
      return {
        ...state,
        email: action.value,
      };
    case 'CHANGE_PASSWORD_VALUE':
      return {
        ...state,
        password: action.value,
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
