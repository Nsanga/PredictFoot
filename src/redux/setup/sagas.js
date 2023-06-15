import { all } from 'redux-saga/effects';
import HomeSaga from '../home/sagas';
import BlogSaga from '../blog/sagas';

/**
 * @description combine sagas
 */
export default function* Sagas() {
  yield all([
    HomeSaga(),
    BlogSaga(),
  ]);
}
