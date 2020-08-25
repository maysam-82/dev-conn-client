import actionTypes from './actionTypes';

export const setLoading = () => (dispatch) => {
    dispatch({
        type: actionTypes.SET_LOADING,
    });
};
export const removeLoading = () => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_LOADING,
    });
};
