import { combineReducers } from 'redux';
import toastReducer from './toast';
import authenticationReducer from './auth';
export default combineReducers({
    toast: toastReducer,
    auth: authenticationReducer,
});
