import { connect } from 'react-redux';

import EmployeeList from './employeeList';
import { findEmployees } from './_actions';

const mapStateToProps = ({ employees }) => ({
  employees,
});

const mapDispatchToProps = {
  findEmployees,
};

const EmployeeListContainer = connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
export default EmployeeListContainer;
