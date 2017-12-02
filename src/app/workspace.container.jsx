/* @flow */
import React from 'react';
import { Route } from 'react-router-dom';

import '../scss/index.scss';
import { EmployeeListContainer } from '../employees';
import AppNav from './appNav';

const Workspace = () => (
  <div>
    <h1>React-Redux Landing Page</h1>
    <AppNav />
    <Route path="/employees" component={EmployeeListContainer} />
    <Route path="/department" component={EmployeeListContainer} />
  </div>
);

export default Workspace;
