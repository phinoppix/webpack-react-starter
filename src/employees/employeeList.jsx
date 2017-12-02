import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { BusyAnimator } from '../common';
import type { Employee } from './_dto';

type Props = {
  employees: Array<Employee>,
  findEmployees: (void) => void,
}

export default class EmployeeList extends Component<Props> {
  componentDidMount() {
    const { findEmployees } = this.props;
    findEmployees();
  }

  render() {
    const
      {
        employees:
        {
          list = Array.prototype,
          finding = false,
        },
      } = this.props;


    const rows = list.map(e => (
      <tr key={e.id}>
        <td><Link to={`/employees/${e.id}`}>{e.firstName}</Link></td>
        <td>{e.lastName}</td>
        <td>{e.email}</td>
      </tr>
    ));


    if (finding) {
      return <BusyAnimator />;
    }
    return (
      <div>
        <h3>Employee List</h3>
        <table>
          <thead>
            <tr>
              <td className="employees-header">First Name</td>
              <td className="employees-header">Last Name</td>
              <td className="employees-header">Email</td>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

EmployeeList.defaultProps = {
  employees: { list: [] },
};
