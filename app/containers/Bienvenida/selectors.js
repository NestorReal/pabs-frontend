import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the bienvenida state domain
 */

const selectBienvenidaDomain = state => state.bienvenida || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Bienvenida
 */

const makeSelectBienvenida = () =>
  createSelector(
    selectBienvenidaDomain,
    substate => substate,
  );

export default makeSelectBienvenida;
export { selectBienvenidaDomain };
