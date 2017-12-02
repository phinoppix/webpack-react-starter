import { connect } from 'react-redux';
import EmployeeView from './employeeView';

const mapStateToProps = ({ employees }) => ({
  employees,
});

export default connect(mapStateToProps)(EmployeeView);
