/*
 *
 * Home actions
 *
 */

import { DEFAULT_ACTION, GET_REPORTS_INIT, GET_USER_INIT } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getReportAction() {
  return {
    type: GET_REPORTS_INIT,
  };
}

export function getUserAction() {
  return {
    type: GET_USER_INIT,
  };
}
