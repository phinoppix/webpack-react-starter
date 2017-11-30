import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BusyAnimator } from '../common';


export default class EmployeeList extends Component {
  componentDidMount() {
    const { findEmployees } = this.props;
    findEmployees();
  }

  render() {
    const
      {
        employees:
        {
          list = [],
          finding = false,
        },
      } = this.props;


    const rows = list.map(e => (
      <tr key={e.id}>
        <td>{e.firstName}</td>
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
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
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

EmployeeList.propTypes = {
  employees: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  findEmployees: PropTypes.func,
};

EmployeeList.defaultProps = {
  employees: { list: [] },
};
