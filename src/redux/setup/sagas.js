import {all} from 'redux-saga/effects';
import ExampleSaga from '../example/sagas';
/**
 * @description combine sagas
 */
export default function* Sagas() {
  yield all([ExampleSaga()]);
}
