import { FIND_EMPLOYEES, FIND_EMPLOYEES_DONE } from './_actions';

const init = {
  list: [],
  finding: false,
  lastErr: null,
};

export default (state = init, action) => {
  switch (action.type) {
    case FIND_EMPLOYEES:
      return {
        ...state,
        list: action.data,
      };
    case FIND_EMPLOYEES_DONE:
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
