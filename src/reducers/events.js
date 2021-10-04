const initialState = {
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
    default:
      return state;
  }
};

export default reducer;
