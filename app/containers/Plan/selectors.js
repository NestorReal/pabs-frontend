import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the plan state domain
 */

const selectPlanDomain = state => state.plan || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Plan
 */

const makeSelectPlan = () =>
  createSelector(
    selectPlanDomain,
    substate => substate,
  );

export default makeSelectPlan;
export { selectPlanDomain };
