/*
 *
 * Plan reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  step: 4,
  plan: {},
  payers: {},
  plans: [],
};

/* eslint-disable default-case, no-param-reassign */
const planReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.DEFAULT_ACTION:
        break;
      case constants.STEP:
        draft.step = action.step;
        break;
      case constants.TYPEPLAN:
        draft.plan = action.plan;
        break;
      case constants.PAYERS_SUCCEED:
        draft.payers = action.response;
        break;
      case constants.GET_PLANS_SUCCESS:
        draft.plans = action.response;
        break;
    }
  });

export default planReducer;
