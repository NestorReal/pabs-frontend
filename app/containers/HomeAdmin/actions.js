/*
 *
 * HomeAdmin actions
 *
 */

import * as constants from './constants';

export function defaultAction() {
  return {
    type: constants.DEFAULT_ACTION,
  };
}

export function getCompanies() {
  return {
    type: constants.GET_COMPANIES_INIT,
  };
}

export function createPlan(data) {
  return {
    type: constants.CREATE_PLANS_INIT,
    data,
  };
}

export function getPlan() {
  return {
    type: constants.GET_PLANS_INIT,
  };
}

export function getEditPlan(id) {
  return {
    type: constants.GET_EDIT_PLANS_INIT,
    id,
  };
}

export function editPlan(data) {
  return {
    type: constants.EDIT_PLANS_INIT,
    data,
  };
}

export function getContract() {
  return {
    type: constants.GET_CONTRACT_INIT,
  };
}

export function getLeaflets() {
  return {
    type: constants.GET_LEAFLETS_INIT,
  };
}

export function getUsers() {
  return {
    type: constants.GET_USERS_INIT,
  };
}

export function getUser() {
  return {
    type: constants.GET_USER_INIT,
  };
}

export function deleteUser(id) {
  return {
    type: constants.DELETE_USER_INIT,
    id,
  };
}

export function getEditUser(id) {
  return {
    type: constants.GET_EDIT_USER_INIT,
    id,
  };
}

export function editUser(data) {
  return {
    type: constants.EDIT_USER_INIT,
    data,
  };
}

export function createUserAction(data) {
  return {
    type: constants.CREATE_USER_INIT,
    data,
  };
}

export function getFeatures() {
  return {
    type: constants.GET_FEATURES_INIT,
  };
}
