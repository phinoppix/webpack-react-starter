// @flow
export const FIND_DEPARTMENTS = 'FIND_DEPARTMENTS';
export const FIND_DEPARTMENTS_DONE = 'FIND_DEPARTMENTS_DONE';

export const findDepartments = () => ({
  type: FIND_DEPARTMENTS,
});

export const findDepartmentsDone = (data: any, err: any) => ({
  type: FIND_DEPARTMENTS_DONE,
  data,
  err,
});

