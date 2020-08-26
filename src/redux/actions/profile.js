import actionTypes from '../actions/actionTypes';
import { getData } from '../../services/api/fetchApi';
import { setLoading, removeLoading } from './loading';
import { setToast } from './toast';
import { errorMessage } from '../../fixtures/messages';

// Get the current user profile
export const getCurrentProfile = () => async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: actionTypes.GET_PROFILE_START });
    try {
        const data = await getData('/api/profile/me');
        dispatch({ type: actionTypes.GET_PROFILE_SUCCESS, payload: data });
        dispatch(removeLoading());
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
        dispatch({
            type: actionTypes.GET_PROFILE_FAIL,
        });
    }
};
