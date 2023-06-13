import { combineReducers } from 'redux';
import HomeReducer from '../home/reducers';
import BlogReducer from '../blog/reducers';
import { LoadingReducer } from '../page/reducers';


/**
 * @description combine reducers
 */
const rootReducer = combineReducers({
  HomeReducer,
  BlogReducer,
  LoadingReducer
});

export default rootReducer;
