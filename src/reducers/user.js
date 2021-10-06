const initialState = {
  classMenu: false,
  classSearch: false,
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
    case 'TOGGLE_MENU':
      return {
        ...state,
        classMenu: action.classMenu,
      };
    case 'TOGGLE_SEARCH':
      return {
        ...state,
        classSearch: action.classSearch,
      };
    default:
      return state;
  }
};

export default reducer;
