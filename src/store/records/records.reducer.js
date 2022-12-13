import {types as recordTypes} from '../record/record.reducer';

export const types = {
  SET: 'RECORDS/SET',
  IMPORT: 'RECORDS/IMPORT',
  CLEAR: 'RECORDS/CLEAR',
};

const initialState = {
  collection: [],
};

export default function reducer(state = {...initialState}, action) {
  switch (action.type) {
    case types.SET:
      return {
        ...state,
        collection: action.data,
      };

    case types.IMPORT:
      return {
        ...state,
        collection: [
          ...state.collection,
          ...action.data.map(record => {
            return Array.isArray(record.type)
              ? {
                  ...record,
                  type: String.fromCharCode(...record.type),
                }
              : record;
          }),
        ],
      };

    case types.CLEAR:
      return {
        ...initialState,
      };

    case recordTypes.WRITE:
      return {
        ...state,
        collection: [...state.collection, action.data],
      };

    case recordTypes.DUPLICATE: {
      const index = state.collection.indexOf(action.data);
      const cloneCollection = [...state.collection];
      cloneCollection.splice(index, 0, action.data);
      return {
        ...state,
        collection: cloneCollection,
      };
    }

    case recordTypes.DELETE: {
      const index = state.collection.indexOf(action.data);
      const cloneCollection = [...state.collection];
      cloneCollection.splice(index, 1);
      return {
        ...state,
        collection: cloneCollection,
      };
    }

    default:
      return state;
  }
}
