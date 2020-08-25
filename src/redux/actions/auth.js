import actionTypes from './actionTypes';
import { postData } from '../../services/api/fetchApi';
import { setToast } from './toast';
import { successMessage } from '../../fixtures/messages';
import { setLoading, removeLoading } from './loading';

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
        dispatch(removeLoading());
        dispatch(setToast(successMessage.WELCOME_TO_DEV_CONN, 'success'));
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
