import * as types from './types';

export const setLoading = loading => ({
  type: types.SET_LOADING,
  payload: loading,
});

export const fetchHomeRequest = () => ({
  type: types.FETCH_HOME_REQUEST,
});

export const fetchHomeSuccess = (data) => ({
  type: types.FETCH_HOME_SUCCESS,
  payload: data,
});

export const fetchHomeFailure = (error) => ({
  type: types.FETCH_HOME_FAILURE,
  payload: error,
});
