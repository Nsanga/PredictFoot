import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from './types';
import { setLoading, fetchHomeSuccess, fetchHomeFailure } from './actions';
import { getUnauthRequest } from '../../helpers/api';
import {url} from '../../urlLoader';

function* setLoadingSaga({ payload }) {
  yield put(setLoading(payload));
}

function* fetchHomeDataSaga() {
  try {
    const link = `${url}/api/v1/landing-page/home/getAll`;
    const data = yield getUnauthRequest(link);

    yield put(setLoading(true)); // Mettre à jour l'état de chargement pour indiquer que la récupération des données est en cours
    yield put(fetchHomeSuccess(data)); // Mettre à jour l'état avec les données récupérées
    yield put(setLoading(false)); // Mettre à jour l'état de chargement pour indiquer que la récupération des données est terminée
  } catch (error) {
    yield put(fetchHomeFailure(error)); // Gérer les erreurs de récupération des données
    yield put(setLoading(false)); // Mettre à jour l'état de chargement pour indiquer que la récupération des données est terminée avec une erreur
  }
}

export default function* LoadingSaga() {
  yield takeLatest(types.SET_LOADING, setLoadingSaga);
  yield takeLatest(types.FETCH_HOME_REQUEST, fetchHomeDataSaga); // Écouter les actions de récupération des données
}
