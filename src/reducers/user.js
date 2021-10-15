const initialState = {
  loading: true,
  classMenu: false,
  classSearch: false,
  logged: false,
  isConnected: false,
  id: '',
  lastname: '',
  firstname: '',
  pseudo: '',
  email: '',
  password: '',
  presentation: '',
  city: '',
  equipement: '',
  profileData: {},
  newDisciRegister: '1',
  newDepartementRegister: '01 - Ain',
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
        isConnected: true,
      };
    case 'HANDLE_TOAST':
      return {
        ...state,
        isConnected: false,
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
        loading: false,
        profileData: action.newProfile,
        profileAvatar: action.newProfile.avatar,
        profileCategories: action.newProfile.categories,
        profileCity: action.newProfile.city,
        profileDepartement: action.newProfile.departement,
        profileEmail: action.newProfile.email,
        profileEquipement: action.newProfile.equipement,
        profileEvents: action.newProfile.events,
        profileFirstname: action.newProfile.firstname,
        profileLastname: action.newProfile.lastname,
        profileParticipations: action.newProfile.participations,
        profilePresentation: action.newProfile.presentation,
        profilePseudo: action.newProfile.pseudo,
        profileSpots: action.newProfile.spots,
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
