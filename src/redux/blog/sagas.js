import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { getUnauthRequest } from '../../helpers/api';
import {url} from '../../urlLoader';

function* fetchBlogRequest() {
  try {
    const link = `${url}/api/v1/landing-page/blog/getAll`;
    const data = yield getUnauthRequest(link);
    console.log('datas::', data)

    if(data.success) {
      yield put({ type: types.GET_BLOG_SUCCESS, payload: data.data }); 
    } else {
      yield put({ type: types.GET_BLOG_FAILED, payload: "echec recuperation des données" });
    }
  } catch (error) {
    console.log(error);
    yield put({ type: types.GET_BLOG_FAILED, payload: error });
  } 
}

function* fetchArticleRequest(action) {
  try {
    console.log('id::', action.payload)
    const id = action.payload
    const link = `${url}/api/v1/landing-page/blog/getOne?Id=${id}`;
    
    const data = yield getUnauthRequest(link);
    console.log('article', data)

    if (data.success) {
      yield put({type: types.GET_ARTICLE_SUCCESS, payload: data.data});
    } else {
      yield put({ type: types.GET_ARTICLE_FAILED, payload: "Échec de la récupération des données de l'article" });
    }
  } catch (error) {
    yield put({ type: types.GET_ARTICLE_FAILED, payload: error });
  }
}

export default function* BlogSaga() {
  yield takeLatest(types.GET_BLOG_REQUEST, fetchBlogRequest);
  yield takeLatest(types.GET_ARTICLE_REQUEST, fetchArticleRequest);
}




