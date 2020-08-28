import actionTypes from '../actions/actionTypes';
import {
    getData,
    postData,
    updateData,
    deleteData,
} from '../../services/api/fetchApi';
import { setLoading, removeLoading } from './loading';
import { setToast } from './toast';
import { errorMessage, successMessage } from '../../fixtures/messages';
import history from '../../history';
import { routes } from '../../routes';

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

// Get all profiles
export const getProfiles = () => async (dispatch) => {
    dispatch({ type: actionTypes.CLEAR_PROFILE });
    dispatch(setLoading());
    dispatch({ type: actionTypes.GET_PROFILES_START });
    try {
        const data = await getData('/api/profile');
        dispatch({ type: actionTypes.GET_PROFILES_SUCCESS, payload: data });
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
            type: actionTypes.GET_PROFILES_FAIL,
        });
    }
};

// Get profile by id
export const getProfile = (userId) => async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: actionTypes.GET_PROFILE_START });
    try {
        const data = await getData(`/api/profile/user/${userId}`);
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

// Create/Update profile
export const createProfile = (profileData, edit = false) => async (
    dispatch
) => {
    dispatch(setLoading());
    dispatch({ type: actionTypes.CREATE_PROFILE_START });
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const data = await postData('/api/profile', profileData, config);
        dispatch({ type: actionTypes.CREATE_PROFILE_SUCCESS, payload: data });
        dispatch(
            setToast(
                edit
                    ? successMessage.PROFILE_UPDATED
                    : successMessage.PROFILE_CREATED,
                'success'
            )
        );
        dispatch(removeLoading());
        if (!edit) history.push(routes.DASHBOARD);
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
            type: actionTypes.CREATE_PROFILE_FAIL,
        });
    }
};

// Set status of profile in terms of edit/create
export const setProfileStatus = (isEditing) => ({
    type: actionTypes.SET_PROFILE_STATUS,
    payload: isEditing,
});

// Add experience
export const addExperience = (experienceData) => async (dispatch) => {
    dispatch(setLoading());
    dispatch({
        type: actionTypes.ADD_EXPERIENCE_START,
    });
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const data = await updateData(
            '/api/profile/experience',
            experienceData,
            config
        );
        dispatch({
            type: actionTypes.ADD_EXPERIENCE_SUCCESS,
            payload: data,
        });
        dispatch(setToast(successMessage.EXPERIENCE_ADDED, 'success'));
        history.push(routes.DASHBOARD);
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
            type: actionTypes.ADD_EXPERIENCE_FAIL,
        });
    }
};

// Add Education
export const addEducation = (educationData) => async (dispatch) => {
    dispatch(setLoading());
    dispatch({
        type: actionTypes.ADD_EDUCATION_START,
    });
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const data = await updateData(
            '/api/profile/education',
            educationData,
            config
        );
        dispatch({
            type: actionTypes.ADD_EDUCATION_SUCCESS,
            payload: data,
        });
        dispatch(setToast(successMessage.EDUCATION_ADDED, 'success'));
        history.push(routes.DASHBOARD);
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
            type: actionTypes.ADD_EDUCATION_FAIL,
        });
    }
};

// Delete Experience
export const deleteExperience = (experienceId) => async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: actionTypes.DELETE_EXPERIENCE_START });
    try {
        const data = await deleteData(
            `/api/profile/experience/:${experienceId}`
        );

        dispatch({
            type: actionTypes.DELETE_EXPERIENCE_SUCCESS,
            payload: data,
        });
        dispatch(setToast(successMessage.EXPERIENCE_REMOVED, 'success'));
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
            type: actionTypes.DELETE_EXPERIENCE_FAIL,
        });
    }
};

// Delete education
export const deleteEducation = (educationId) => async (dispatch) => {
    dispatch(setLoading());
    dispatch({ type: actionTypes.DELETE_EDUCATION_START });
    try {
        const data = await deleteData(`/api/profile/education/:${educationId}`);

        dispatch({
            type: actionTypes.DELETE_EDUCATION_SUCCESS,
            payload: data,
        });
        dispatch(setToast(successMessage.EDUCATION_REMOVED, 'success'));
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
            type: actionTypes.DELETE_EDUCATION_FAIL,
        });
    }
};

// Delete account & profile
export const deleteProfile = () => async (dispatch) => {
    if (window.confirm('Are you sure? This process can not be undone!')) {
        dispatch(setLoading());
        dispatch({ type: actionTypes.DELETE_ACCOUNT_START });
        try {
            await deleteData(`/api/profile/`);

            dispatch({ type: actionTypes.CLEAR_PROFILE });
            dispatch({
                type: actionTypes.LOG_OUT,
            });
            history.push(routes.REGISTER);
            dispatch(setToast(successMessage.ACCOUNT_DELETED, 'warning'));
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
                type: actionTypes.DELETE_ACCOUNT_FAIL,
            });
        }
    }
};
