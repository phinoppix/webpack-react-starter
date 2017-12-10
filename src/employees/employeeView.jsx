// @flow
import React from 'react';

import type { Employee } from './_types';

type Props = {
  employees: { list: Array<Employee> },
  match: {
    params: {
      id: string
    }
  }
}

const EmployeeView = (props: Props) => {
  const { employees, match: { params: { id = String.prototype } } } = props;
  const profile = employees.list.find(e => e.id === parseInt(id, 10));
  if (!profile) {
    return (
      <p>
        Employee not found for these possible reasons: <br />
        - The id parameter really does not exist.  Try to enter a valid one. <br />
        - The employees list is not yet fetched.  Go back to Employees and click the profile again.
      </p>
    );
  }
  return (
    <section>
      <div>
        <span>ID:</span>
        <span>{profile.id}</span>
      </div>
      <div>
        <span>First Name:</span>
        <span>{profile.firstName}</span>
      </div>
      <div>
        <span>Last Name:</span>
        <span>{profile.lastName}</span>
      </div>
      <div>
        <span>Email:</span>
        <span>{profile.email}</span>
      </div>
      <div>
        <span>Gender:</span>
        <span>{profile.gender}</span>
      </div>
    </section>
  );
};

export default EmployeeView;
