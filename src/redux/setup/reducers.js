import { combineReducers } from 'redux';
import HomeReducer from '../home/reducers';
import BlogReducer from '../blog/reducers';


/**
 * @description combine reducers
 */
const rootReducer = combineReducers({
  HomeReducer,
  BlogReducer,
});

export default rootReducer;
