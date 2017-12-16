// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

function renderApp() {
  ReactDOM.render(
    <AppContainer>
      <App AppRouter={BrowserRouter} />
    </AppContainer>,
    document.getElementById('app'),
  );
}

renderApp();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp();
  });
}
