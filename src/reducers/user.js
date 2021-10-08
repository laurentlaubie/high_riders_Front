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
        id: action.id,
        lastname: action.lastname,
        firstname: action.firstname,
        pseudo: action.pseudo,
        email: action.email,
        password: action.password,
        presentation: action.presentation,
        city: action.city,
        equipement: action.equipement,
        departement: action.departement,
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
