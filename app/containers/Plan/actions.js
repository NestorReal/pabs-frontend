/*
 *
 * Plan actions
 *
 */

import * as constants from './constants';

export function defaultAction() {
  return {
    type: constants.DEFAULT_ACTION,
  };
}

export function payersAction(data) {
  return {
    type: constants.PAYERS_INIT,
    data,
  };
}

export function stepAction(step) {
  return {
    type: constants.STEP,
    step,
  };
}

export function planAction(plan) {
  return {
    type: constants.TYPEPLAN,
    plan,
  };
}
