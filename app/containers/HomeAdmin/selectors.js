import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the HomeAdmin state domain
 */

const selectHomeAdminDomain = state => state.HomeAdmin || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomeAdmin
 */

const makeSelectHomeAdmin = () =>
  createSelector(
    selectHomeAdminDomain,
    substate => substate,
  );

export default makeSelectHomeAdmin;
export { selectHomeAdminDomain };
