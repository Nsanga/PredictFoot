
import * as types from './types';

const INITIAL_STATE = {
  message: null,
  loading: false,
};

function ExampleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_EXAMPLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_EXAMPLE_FAILED:
      return {
        ...state,
        loading: false,
      };
    case types.GET_EXAMPLE_SUCCESS:
      const result = action.payload;
      return {
        ...state,
        loading: false,
        message: result
      };
    default:
      return state;
  }
}

export default ExampleReducer;
