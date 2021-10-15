const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  content: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_VALUE_CONTACT':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'CONTACT_US_POST':
      return {
        ...state,
        firstname: '',
        lastname: '',
        email: '',
        content: '',
      };
    default:
      return state;
  }
};

export default reducer;
