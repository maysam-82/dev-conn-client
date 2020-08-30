import { combineReducers } from 'redux';
import toastReducer from './toast';
import authenticationReducer from './auth';
import loadingReducer from './loading';
import profileReducer from './profile';
import postsReducer from './posts';
export default combineReducers({
    toast: toastReducer,
    auth: authenticationReducer,
    loading: loadingReducer,
    profile: profileReducer,
    posts: postsReducer,
});
