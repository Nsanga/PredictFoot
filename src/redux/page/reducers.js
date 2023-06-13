import * as types from './types';

const initialState = {
  loading: true,
  homes: null,
  error: null,
};

export const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.FETCH_HOME_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        homes: action.payload,
      };
    case types.FETCH_HOME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
