const initialState = {
  logged: false,
  id: '',
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
        email: '',
        password: '',
      };
    case 'GET_PROFILE':
      return {
        ...state,
        id: '',
        lastname: '',
        firstname: '',
        pseudo: '',
        email: '',
        password: '',
        presentation: '',
        city: '',
        equipement: '',
        departement: '',
      };
    default:
      return state;
  }
};

export default reducer;
