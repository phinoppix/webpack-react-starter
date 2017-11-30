import { combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';

/* epics */
import '../app/rxoperators';
import findEmployeesEpic from '../employees/_epics';

/* reducers */
import employees from '../employees/_reducer';

/* combiners */
const rootEpic = combineEpics(findEmployeesEpic);

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {
    getJSON: ajax.getJSON,
  },
});

const rootReducer = combineReducers({
  employees,
});

export {
  epicMiddleware,
  rootReducer,
};
