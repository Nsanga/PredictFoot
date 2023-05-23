import {all} from 'redux-saga/effects';
import Example from '../example/sagas';
/**
 * @description combine sagas
 */
export default function* Sagas() {
  yield all([Example()]);
}
