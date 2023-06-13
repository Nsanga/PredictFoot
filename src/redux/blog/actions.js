import * as types from './types';

export const fetchBlogRequest = payload => ({
  type: types.GET_BLOG_REQUEST,
  payload,
});

export const fetchBlogSuccess = () => ({
  type: types.GET_BLOG_SUCCESS,
});

export const fetchBlogFailure = error => ({
  type: types.GET_BLOG_FAILED,
  payload: error,
});

export const fetchArticleRequest = (id) => ({
  type: types.GET_ARTICLE_REQUEST,
  payload: id,
});

export const fetchArticleSuccess = (data) => ({
  type: types.GET_ARTICLE_SUCCESS,
  payload: data,
});

export const fetchArticleFailure = error => ({
  type: types.GET_ARTICLE_FAILED,
  payload: error,
});

