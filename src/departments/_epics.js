import { FIND_DEPARTMENTS, findDepartmentsDone } from './_actions';

const findDepartmentsEpic = (action$, store, { getJSON }) => action$
  .ofType(FIND_DEPARTMENTS)
  .mergeMap(() => {
    const j = getJSON('/mock/departments.json');
    return j
      .map(response => findDepartmentsDone(response, null));
  });

export default findDepartmentsEpic;
