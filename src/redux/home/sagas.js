import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { getUnauthRequest } from '../../helpers/api';
import {url} from '../../urlLoader';

function* fetchHomeRequest() {
  try {
    const link = `${url}/api/v1/landing-page/home/getAll`;
    const data = yield getUnauthRequest(link);

    if(data.success) {
      yield put({ type: types.GET_HOME_SUCCESS, payload: data.data }); 
    } else {
      yield put({ type: types.GET_HOME_FAILED, payload: "echec recuperation des données" });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_HOME_FAILED, payload: error });
  } 
}

export default function* HomeSaga() {
  yield takeLatest(types.GET_HOME_REQUEST, fetchHomeRequest);
}




