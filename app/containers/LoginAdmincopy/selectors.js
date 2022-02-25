import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginAdmin state domain
 */

const selectLoginAdminDomain = state => state.loginAdmin || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginAdmin
 */

const makeSelectLoginAdmin = () =>
  createSelector(
    selectLoginAdminDomain,
    substate => substate,
  );

export default makeSelectLoginAdmin;
export { selectLoginAdminDomain };
