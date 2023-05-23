import AsyncStorage from '@react-native-async-storage/async-storage';
import {put, takeLatest} from 'redux-saga/effects';
import {getUserProfile as getUserProfileService} from '../../services/user';
import * as types from './types';

const USER_PATH = '/user';

/**
 * @description Retrieve user information
 * @param {user token}
 * @returns transactions, user informations, balance
 */
function* getUserProfile({payload}) {
  console.log('done');
  const path = `${USER_PATH}/profile`;
  try {
    const data = yield getUserProfileService(path, payload);
    if (data.status === false) {
      console.log('response: ', data);
      return;
    }
    yield put({type: types.GET_USER_PROFILE_SUCCESS, payload: data.response});
  } catch (error) {
    console.error('Some Error: ', error);
  }
}

export default function* UserSaga() {
  yield takeLatest(types.GET_USER_PROFILE_REQUEST, getUserProfile);
}
