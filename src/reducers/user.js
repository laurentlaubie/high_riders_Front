const initialState = {
  logged: false,
  lastname: '',
  firstname: '',
  pseudo: '',
  email: '',
  password: '',
  presentation: '',
  city: '',
  equipement: '',
  departement: '01',
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
        pseudo: action.pseudo,
        userId: action.userId,
        token: action.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        logged: false,
        email: '',
        password: '',
        pseudo: '',
        userId: '',
        token: '',
      };
    case 'NEW_USER':
      return {
        ...state,
      };
    case 'GET_PROFILE':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
