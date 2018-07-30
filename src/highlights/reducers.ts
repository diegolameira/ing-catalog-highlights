import { combineReducers } from 'redux';

import { ActionTypes } from './actions';

const current = (state = {}, action: { type: ActionTypes, index: number }) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT:
      return action.index;
    default:
      return state;
  }
};

export default combineReducers({
  current
});
