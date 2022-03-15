/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  user: {},
  report: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.DEFAULT_ACTION:
        break;
      case constants.GET_USER_SUCCED:
        draft.user = action.response;
        break;
      case constants.GET_REPORTS_SUCCED:
        draft.report = action.response;
        break;
    }
  });

export default homeReducer;
