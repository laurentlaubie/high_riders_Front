const initialState = {
  logged: false,
  name: '',
  firstname: '',
  nickname: '',
  email: '',
  password: '',
  description: '',
  city: '',
  gear: '',
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
        name: '',
        firstname: '',
        nickname: '',
        email: '',
        password: '',
        description: '',
        city: '',
        gear: '',
      };
    default:
      return state;
  }
};

export default reducer;
