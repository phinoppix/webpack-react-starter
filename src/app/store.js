/* @flow */
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import { rootReducer, epicMiddleware } from './storeDepends';

const middleWares = [
  logger,
  epicMiddleware,
];

export default () => createStore(rootReducer, applyMiddleware(...middleWares));
