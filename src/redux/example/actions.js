import * as types from './types';

export const getUserProfile = payload => ({
  type: types.GET_USER_PROFILE_REQUEST,
  payload,
});
