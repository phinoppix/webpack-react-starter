// @flow
import type { Employee } from './_types';

const FIND_EMPLOYEES = 'FIND_EMPLOYEES';
export const FIND_EMPLOYEES_DONE = 'FIND_EMPLOYEES_DONE';

export type FindEmployeesAction = { type: 'FIND_EMPLOYEES' };

export type FindEmployeesDoneAction = {
  type: 'FIND_EMPLOYEES_DONE',
  data: Array<Employee>,
  error: any
};

export const findEmployees = (): FindEmployeesAction => ({
  type: FIND_EMPLOYEES,
});

export const findEmployeesDone = (data: Array<Employee>, error: any): FindEmployeesDoneAction => ({
  type: FIND_EMPLOYEES_DONE,
  data,
  error,
});

export { FIND_EMPLOYEES };
