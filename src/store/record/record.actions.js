import {types} from './record.reducer';

// export const createRecord = data => dispatch => {
//   dispatch({type: types.CREATE, data});
// };

export const createRecord = (record, data) => ({
  type: types.CREATE,
  data: {record, data},
});
