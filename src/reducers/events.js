const initialState = {
  loading: true,
  eventId: {},
  eventsList: [],
  eventsCate: [],
  eventsDepar: [],
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
    default:
      return state;
  }
};

export default reducer;
