import { combineReducers } from 'redux';
import toastReducer from './toast';
import authenticationReducer from './auth';
import loadingReducer from './loading';
export default combineReducers({
    toast: toastReducer,
    auth: authenticationReducer,
    loading: loadingReducer,
});
