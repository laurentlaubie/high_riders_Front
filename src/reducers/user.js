const initialState = {
  classMenu: false,
  classSearch: false,
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
  profileData: {},
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
    case 'GET_PROFILE':
      return {
        ...state,
        profileData: action.newProfile,
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
    case 'UPDATE':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
