/*
 *
 * HomeAdmin reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  companies: [],
  plans: [],
  editPlan: {},
  users: [],
  user: {},
  editUser: {},
  contract: [],
  leaflets: [],
  features: [],
  editFeatures: {},
  editCompanies: {},
};

/* eslint-disable default-case, no-param-reassign */
const HomeAdminReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.DEFAULT_ACTION:
        break;
      case constants.GET_PLANS_SUCCED:
        draft.plans = action.response;
        break;
      case constants.GET_EDIT_PLANS_SUCCED:
        draft.editPlan = action.response;
        break;
      case constants.GET_CONTRACT_SUCCESS:
        draft.contract = action.response;
        break;
      case constants.GET_LEAFLETS_SUCCESS:
        draft.leaflets = action.response;
        break;
      case constants.GET_USERS_SUCCESS:
        draft.users = action.response;
        break;
      case constants.GET_USER_SUCCESS:
        draft.user = action.response;
        break;
      case constants.GET_EDIT_USER_SUCCED:
        draft.editUser = action.response;
        break;
      case constants.GET_FEATURES_SUCCESS:
        draft.features = action.response;
        break;
      case constants.GET_EDIT_FEATURES_SUCCESS:
        draft.editFeatures = action.response;
        break;
      case constants.CREATE_FEATURES_SUCCESS:
        draft.editFeatures = {};
        break;
      case constants.GET_COMPANIES_SUCCED:
        draft.companies = action.response;
        break;
      case constants.GET_EDIT_COMPANIES_SUCCESS:
        draft.editCompanies = action.response;
        break;
      case constants.CREATE_COMPANIES_SUCCESS:
        draft.editCompanies = {};
        break;
    }
  });

export default HomeAdminReducer;
