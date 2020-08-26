import actionTypes from './actionTypes';
import { postData, setAuthToken, getData } from '../../services/api/fetchApi';
import { setToast } from './toast';
import { successMessage, errorMessage } from '../../fixtures/messages';
import { setLoading, removeLoading } from './loading';
import history from '../../history';
import { routes } from '../../routes';

// Load user
export const loadUser = () => async (dispatch) => {
    dispatch(setLoading());
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
        dispatch(removeLoading());
    } catch (error) {
        dispatch(removeLoading());
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
    } catch (error) {
        dispatch(removeLoading());
        const errors = error.response.data.errors;
        if (error.response.status === 500) {
            dispatch(
                setToast(errorMessage.COULD_NOT_CONNECT_TO_SERVER, 'danger')
            );
            return;
        }
        if (errors.length > 0) {
            for (const error of errors) {
                dispatch(setToast(error.msg, 'danger'));
            }
        }
        dispatch({ type: actionTypes.LOGIN_FAIL });
    }
};

// Logout user
export const setLogout = () => (dispatch) => {
    dispatch({ type: actionTypes.LOG_OUT });
    history.push(routes.HOME);
};
