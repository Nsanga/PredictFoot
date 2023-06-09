import * as types from './types';

const INITIAL_STATE = {
  blogs: [],
  articles: [],
  totalPages: 0,
  page: 0,
  loading: false,
  error: null
};

function BlogReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_BLOG_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.GET_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.payload.results,
        totalPages: action.payload.totalPages,
        page: action.payload.page,
      };
      case types.GET_ARTICLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ARTICLE_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload
      };
    default:
      return state;
  }
}

export default BlogReducer;
