import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import {
  fetchExampleSuccess,
  fetchExampleFailure
} from './actions';

/**
 * @description Retrieve user information
 * @param {user token}
 * @returns transactions, user informations, balance
 */
function* fetchExampleData(action) {
  console.log('done');
  try {
    const data = yield fetchExampleSuccess(action);
    if (data.status === false) {
      console.log('response: ', data);
      return;
    }
    yield put(fetchExampleSuccess('Data received successfully'));
  } catch (error) {
    yield put(fetchExampleFailure(error.message));
  }
}

export default function* ExampleSaga() {
  yield takeLatest(types.GET_EXAMPLE_REQUEST, fetchExampleData);
}
