import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import reducers from './reducers';
import { ActionTypes } from './actions';

const initialState = {};

const actionTypeEnumToString = (action: any): any =>
  typeof action.type === 'number' && ActionTypes[action.type]
    ? {
      type: ActionTypes[action.type],
      payload: action.payload
    }
    : action;

const logger = createLogger({ actionTransformer: actionTypeEnumToString });
const composeEnhancers = composeWithDevTools({
  actionSanitizer: actionTypeEnumToString
});

export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(logger))
);
