import * as types from './types';

const INITIAL_STATE = {
  homes: [],
  loading: false,
  error: null
};

function HomeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_HOME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_HOME_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.GET_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        homes: action.payload
      };
    default:
      return state;
  }
}

export default HomeReducer;
