import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav>
    <ul>
      <li><Link to="/employees">Employees</Link></li>
      <li><Link to="/departments">Departments</Link></li>
    </ul>
  </nav>
);
