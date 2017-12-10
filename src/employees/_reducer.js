/* @flow */
import type { EmployeeState } from './_types';
import * as Actions from './_actions';
import type { FindEmployeesAction, FindEmployeesDoneAction } from './_actions';

const init: EmployeeState = {
  list: [],
  finding: false,
  lastErr: null,
};

type Action = FindEmployeesAction | FindEmployeesDoneAction;

export default (
  state: EmployeeState = init,
  action: Action,
) => {
  switch (action.type) {
    case Actions.FIND_EMPLOYEES_DONE: {
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
    }
    default:
      return state;
  }
};
