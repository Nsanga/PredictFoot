import * as types from './types';

export const fetchExampleRequest = payload => ({
  type: types.GET_EXAMPLE_REQUEST,
  payload,
});

export const fetchExampleSuccess = message => ({
  type: types.GET_EXAMPLE_SUCCESS,
  payload: message,
});

export const fetchExampleFailure = error => ({
  type: types.GET_EXAMPLE_FAILED,
  payload: error,
});

