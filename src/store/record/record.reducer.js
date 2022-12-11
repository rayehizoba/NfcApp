export const types = {
  CREATE: 'RECORD/CREATE',
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

    case types.CREATE:
      return {
        ...state,
        model: action.data,
      };

    default:
      return state;
  }
}
