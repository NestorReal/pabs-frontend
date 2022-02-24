/*
 *
 * LoginAdmin reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  user: {},
};

/* eslint-disable default-case, no-param-reassign */
const loginAdminReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.DEFAULT_ACTION:
        break;
      case constants.LOGIN_SUCCEED:
        draft.user = action.user;
        break;
    }
  });

export default loginAdminReducer;
