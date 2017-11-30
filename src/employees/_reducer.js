import * as Actions from './_actions';

const init = {
  list: [],
  finding: false,
  lastErr: null,
};

export default (state = init, action) => {
  switch (action.type) {
    case Actions.FIND_EMPLOYEES:
      return {
        ...state,
        list: action.data,
      };
    case Actions.FIND_EMPLOYEES_DONE:
      if (action.err) {
        return {
          ...state,
          lastErr: action.err,
        };
      }
      return {
        ...state,
        list: action.data,
      };
    default:
      return state;
  }
};
