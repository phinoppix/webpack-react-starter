// @flow
import { combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';

/* epics */
import '../app/rxoperators'; // required by all epics
import findEmployeesEpic from '../employees/_epics';
import findDepartmentsEpic from '../departments/_epics';

/* reducers */
import employees from '../employees/_reducer';
import departments from '../departments/_reducer';


/* combiners */
const rootEpic = combineEpics(
  findEmployeesEpic,
  findDepartmentsEpic,
);

const rootReducer = combineReducers({
  employees,
  departments,
});

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {
    getJSON: ajax.getJSON,
  },
});

export {
  epicMiddleware,
  rootReducer,
};
