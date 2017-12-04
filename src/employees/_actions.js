// @flow
export const FIND_EMPLOYEES = 'FIND_EMPLOYEES';
export const FIND_EMPLOYEES_DONE = 'FIND_EMPLOYEES_DONE';

export const findEmployees = () => ({
  type: FIND_EMPLOYEES,
});

export const findEmployeesDone = (data: any, err: any) => ({
  type: FIND_EMPLOYEES_DONE,
  data,
  err,
});
