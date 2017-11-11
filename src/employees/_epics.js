import { FIND_EMPLOYEES, findEmployeesDone } from './_actions';

const findEmployeesEpic = (action$, store, { getJSON }) =>
  action$.ofType(FIND_EMPLOYEES)
    .mergeMap(() =>
      getJSON('/mock/employees.json')
        .map(response => findEmployeesDone(response, null)));

export default findEmployeesEpic;
