import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

const rootReducers = combineReducers({ registerReducer, loginReducer });

export default rootReducers;
