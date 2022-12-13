export const types = {
  DELETE: 'RECORD/DELETE',
  DUPLICATE: 'RECORD/DUPLICATE',
  WRITE: 'RECORD/WRITE',
  SET: 'RECORD/SET',
};

const initialState = {
  model: null,
};

export default function reducer(state = {...initialState}, action) {
  switch (action.type) {
    case types.SET:
      return {
        ...state,
        model: action.data,
      };

    default:
      return state;
  }
}
