/* @flow */
export type Employee = {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  gender: string
}

export type EmployeeState = {
  +list: Array<Employee>,
  +finding: boolean,
  +lastErr: any,
}
