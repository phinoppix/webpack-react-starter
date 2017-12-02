// @flow
import type { Action } from '../common';
import * as Actions from './_actions';

const init = {
  list: Array.prototype,
  finding: false,
  lastErr: null,
};

export default (state: any = init, action: Action) => {
  switch (action.type) {
    case Actions.FIND_DEPARTMENTS:
      return {
        ...state,
        list: action.data,
      };
    case Actions.FIND_DEPARTMENTS_DONE:
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
