import * as types from './types';

export const fetchHomeRequest = payload => ({
  type: types.GET_HOME_REQUEST,
  payload,
});

export const fetchHomeSuccess = () => ({
  type: types.GET_HOME_SUCCESS,
});

export const fetchHomeFailure = error => ({
  type: types.GET_HOME_FAILED,
  payload: error,
});
