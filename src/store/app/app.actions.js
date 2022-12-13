import {types} from './app.reducer';

/**
 *
 * @param data
 * @returns {function(*): *}
 */
export const setHasNfc = data => dispatch =>
  dispatch({type: types.SET_HAS_NFC, data});
