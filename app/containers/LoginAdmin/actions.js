/*
 *
 * LoginAdmin actions
 *
 */

import * as constants from './constants';

export function defaultAction() {
  return {
    type: constants.DEFAULT_ACTION,
  };
}

export function login(user, password, history) {
  return {
    type: constants.LOGIN_INIT,
    user,
    password,
    history,
  };
}

export function forgotPass(email) {
  return {
    type: constants.FORGOT_PASSWORD_INIT,
    email,
  };
}
