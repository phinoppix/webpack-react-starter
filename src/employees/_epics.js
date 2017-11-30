import { FIND_EMPLOYEES, findEmployeesDone } from './_actions';

const findEmployeesEpic = (action$, store, { getJSON }) => action$
  .ofType(FIND_EMPLOYEES)
  .mergeMap(() => {
    const j = getJSON('/mock/employees.json');
    return j
      .map(response => findEmployeesDone(response, null));
  });

export default findEmployeesEpic;
