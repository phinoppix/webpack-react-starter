/* @flow */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';

import createStore from './store';
import WorkspaceContainer from './workspace.container';

const store = createStore();

type Props = {
  AppRouter: Router
}

const App = (props: Props) => {
  const { AppRouter } = props;

  return (
    <Provider store={store}>
      <AppRouter>
        <WorkspaceContainer />
      </AppRouter>
    </Provider>
  );
};

// App.propTypes = {
//   AppRouter: PropTypes.func.isRequired,
// };


export default App;
