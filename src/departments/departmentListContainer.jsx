import { connect } from 'react-redux';

import DepartmentList from './departmentList';
import { findDepartments } from './_actions';

const mapStateToProps = ({ departments }) => ({
  departments,
});

const mapDispatchToProps = {
  findDepartments,
};

const DepartmentListContainer = connect(mapStateToProps, mapDispatchToProps)(DepartmentList);
export default DepartmentListContainer;
