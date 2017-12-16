/* @flow */
import React, { Component } from 'react';

type Department = {
  id: string,
  departmentName: string
}

type Props = {
  departments: {
    list: Array<Department>
  },
  findDepartments: (void) => void
}

class DepartmentList extends Component<Props> {
  componentDidMount() {
    const { findDepartments } = this.props;
    findDepartments();
  }

  render() {
    const { departments: { list = Array.prototype } } = this.props;
    const depts = list.map(d => (
      <tr key={d.id}>
        <td>{d.id}</td>
        <td>{d.departmentName}</td>
      </tr>
    ));

    return (
      <table>
        <tbody>
          {depts}
        </tbody>
      </table>
    );
  }
}

export default DepartmentList;
