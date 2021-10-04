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
        token: action.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        logged: false,
        email: '',
        password: '',
      };
    case 'NEW_USER':
      return {
        ...state,
        lastname: '',
        firstname: '',
        pseudo: '',
        email: '',
        password: '',
        presentation: '',
        city: '',
        equipement: '',
      };
    default:
      return state;
  }
};

export default reducer;
