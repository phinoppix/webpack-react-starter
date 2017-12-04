// @flow
import React from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import { parse } from 'querystring';

import '../scss/index.scss';
import { EmployeeListContainer, EmployeeViewContainer } from '../employees';
import { DepartmentListContainer } from '../departments';
import { Error400 } from '../notfound';
import AppNav from './appNav';

type Props = {
  location: { search: string },
}

const Workspace = (props: Props) => {
  const { location: { search } } = props;
  const { r } = parse(search.substr(1));

  return (
    <div>
      <h1>React-Redux Landing Page</h1>
      <AppNav />
      { r && <Redirect to={r} /> }
      <Switch>
        <Redirect exact from="/" to="/employees" />
        <Route exact path="/employees" component={EmployeeListContainer} />
        <Route path="/employees/:id" component={EmployeeViewContainer} />
        <Route path="/departments" component={DepartmentListContainer} />
        <Route component={Error400} />
      </Switch>
    </div>
  );
};

export default withRouter(Workspace);
