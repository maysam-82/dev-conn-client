import actionTypes from './actionTypes';
import { postData, setAuthToken, getData } from '../../services/api/fetchApi';
import { setToast } from './toast';
import { successMessage } from '../../fixtures/messages';
import { setLoading, removeLoading } from './loading';
import history from '../../history';

// Load user
export const loadUser = () => async (dispatch) => {
    const token = localStorage.token;
    if (token) {
        setAuthToken(token);
    }
    try {
        const data = await getData('/api/auth');
        dispatch({
            type: actionTypes.USER_LOADED,
            payload: data,
        });
    } catch (error) {
        dispatch({ type: actionTypes.AUTH_ERROR });
        history.push('/login');
    }
};

// Register user
export const setRegister = ({ name, email, password }) => async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: actionTypes.REGISTER_START });
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({ name, email, password });
    try {
        const data = await postData('/api/users', body, config);
        dispatch({ type: actionTypes.REGISTER_SUCCESS, payload: data });
        dispatch(loadUser());
        dispatch(removeLoading());
        dispatch(setToast(successMessage.REGISTRATION_SUCCEEDED, 'success'));
        history.push('/dashboard');
    } catch (error) {
        dispatch(removeLoading());
        const errors = error.response.data.errors;
        if (errors.length > 0) {
            for (const error of errors) {
                dispatch(setToast(error.msg, 'danger'));
            }
        }
        dispatch({ type: actionTypes.REGISTER_FAIL });
    }
};

// Login user
export const setLogin = (email, password) => async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: actionTypes.REGISTER_START });
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const body = JSON.stringify({ email, password });
    try {
        const data = await postData('/api/auth', body, config);
        dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: data });
        dispatch(loadUser());
        dispatch(removeLoading());
        dispatch(setToast(successMessage.WELCOME, 'success'));
        history.push('/dashboard');
    } catch (error) {
        dispatch(removeLoading());
        const errors = error.response.data.errors;
        if (errors.length > 0) {
            for (const error of errors) {
                dispatch(setToast(error.msg, 'danger'));
            }
        }
        dispatch({ type: actionTypes.LOGIN_FAIL });
    }
};
