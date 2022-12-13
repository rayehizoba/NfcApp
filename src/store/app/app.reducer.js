export const types = {
  SET_HAS_NFC: 'APP/SET_HAS_NFC',
};

const initialState = {
  hasNfc: false,
};

export default function reducer(state = {...initialState}, action) {
  switch (action.type) {
    case types.SET_HAS_NFC:
      return {
        ...state,
        hasNfc: action.data,
      };

    default:
      return state;
  }
}
