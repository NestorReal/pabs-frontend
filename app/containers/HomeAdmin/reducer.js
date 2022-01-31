/*
 *
 * HomeAdmin reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  users: [],
  user: {},
};

/* eslint-disable default-case, no-param-reassign */
const HomeAdminReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.DEFAULT_ACTION:
        break;
      case constants.GET_USERS_SUCCESS:
        draft.users = action.response;
        break;
      case constants.GET_USER_SUCCESS:
        draft.user = action.response;
        break;
    }
  });

export default HomeAdminReducer;
