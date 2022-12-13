import {types as recordTypes} from '../record/record.reducer';

export const types = {};

const initialState = {
  collection: [],
};

export default function reducer(state = {...initialState}, action) {
  switch (action.type) {
    case recordTypes.WRITE:
      return {
        ...state,
        collection: [...state.collection, action.data],
      };

    case recordTypes.CREATE:
      return {
        ...state,
        collection: [...state.collection, action.data],
      };

    default:
      return state;
  }
}
