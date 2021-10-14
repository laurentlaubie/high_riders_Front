const initialState = {
  loading: true,
  eventId: {
    participations: [],
  },
  eventsList: [],
  eventsCate: [],
  eventsDepar: [],
  newComment: '',
  departValue: '1',
  spotDisci: '1',
  newOpeningHour: '00:00',
  newClosingHour: '00:00',
  newDateEvent: '2021-10-15',
  newTypeEvent: 'Loisir',
  newCategory: '1',
  newDepartement: '1',
  newResultList: [],
  participateUser: false,
  togPart: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_EVENTS_LIST':
      return {
        ...state,
        eventsList: action.eventsList,
        eventsCate: action.eventsCate,
        eventsDepar: action.eventsDepar,
      };
    case 'SAVE_EVENT_ID':
      return {
        ...state,
        eventId: action.newEvent,
        loading: false,
      };
    case 'CHANGE_EVENT_VALUE':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'SAVE_EVENT_RESULT_LIST':
      return {
        ...state,
        newResultList: action.newList,
      };
    case 'SUCCESS_COMMENT_EVENT':
      return {
        ...state,
        newComment: '',
      };
    case 'TOGGLE_PARTICIPATE':
      return {
        ...state,
        togPart: action.participateUser,
      };
    case 'USER_IS_PARTICIPATING':
      return {
        ...state,
        participateUser: action.participateUserEvent,
      };
    default:
      return state;
  }
};

export default reducer;
