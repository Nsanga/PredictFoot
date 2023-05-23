import {combineReducers} from 'redux';
import ExampleReducer from '../example/reducer';
/**
 * @description combine reducers
 */
const rootReducer = combineReducers({ExampleReducer});

export default rootReducer;
