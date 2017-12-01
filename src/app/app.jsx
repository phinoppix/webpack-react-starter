/* @flow */
import React from 'react';
import { Provider } from 'react-redux';

import createStore from './store';
import WorkspaceContainer from './workspace.container';

const store = createStore();

export default () => (
  <Provider store={store}>
    <WorkspaceContainer />
  </Provider>
);
